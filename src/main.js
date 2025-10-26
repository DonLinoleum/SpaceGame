import "./style.css";
import * as THREE from "three";
import { drawAim } from "./components/aim";
import { onFire } from "./functions/onFire";
import { generateRandomValues } from "./functions/generateRandomValues";

import { laserHit } from "./functions/laserHits";
import { asteroidMoveByShot } from "./functions/asteroidMoveByShot";
import { spaceshipDown } from "./functions/spaceShipDown";
import { winGame } from "./functions/winGame";

import { gameInit } from "./functions/gameInit";
import { spaceShipMove } from "./functions/spaceShipMove";
import { drawModalStars } from "./functions/modalStars";
import { cameraOptions } from "./config/mainConfig";
import { addScoresToDB } from "./functions/fetches/addScoresToDB";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  cameraOptions.fov,
  cameraOptions.aspect,
  cameraOptions.near,
  cameraOptions.far
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.getElementById("main"),
  powerPreference: "high-performance",
  depth: true,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.physicallyCorrectLights = true;
renderer.setSize(window.innerWidth, window.innerHeight);

//const raycaster = new THREE.Raycaster();
let state = {
  isBegin: false,
  isWin: false,
  isMouseButtonDown: false,
  isSpaceshipDown: false,
  canShot: true,
  canBeDown: true,
  canCreateLaserHitLight: true,
  canSendScoresData: false,
  scoresDataHasBeenSended: false,
  playerName: null,
  level: 1,
  keysPressed: {},
  spaceship: null,
  lasers: [],
  asteroids: [],
  stars: null,
  intersectionsLaserLights: [],
  loading: { total: 0 },
  objectsCount: 4,
  intervalFuncIdForShot: null,
  lerpSpaceshipSpeed: 0.2,
  scores: 0,
  scores_to_win: 200,
  lifes: 2,
  scoresDOMelement: null,
  xwinglogoDOMelement: null,
};
gameInit(scene, state, camera, renderer, THREE);

let clock = new THREE.Clock();
async function mainLoop() {
  const deltaTime = clock.getDelta() * 70;

  if (state.isBegin) {
    spaceShipMove(state, deltaTime, THREE);

    state.stars.translateZ(6 * deltaTime);
    if (state.stars.position.z > 700) state.stars.position.z = -200;

    if (state.lasers.length > 0) {
      state.lasers.forEach((el) => {
        el.translateZ(-0.5 * deltaTime);
        const laserBoundingBox = new THREE.Box3().setFromObject(el);
        if (state.asteroids.length > 0) {
          state.asteroids.forEach((asteroid) => {
            const asteroidBoundingBox = new THREE.Box3().setFromObject(
              asteroid
            );
            if (laserBoundingBox.intersectsBox(asteroidBoundingBox)) {
              scene.remove(el);
              laserHit(scene, state, el, THREE);
              asteroidMoveByShot(asteroid, deltaTime, THREE);
            }
          });
        }
      });
    }

    if (state.asteroids.length > 0) {
      state.asteroids.forEach((el) => {
        if (el.position.z > 20) {
          let values = generateRandomValues();
          el.position.z = -300;
          el.speed = values.randomSpeed;
          el.position.x = values.randomX;
          el.position.y = values.randomY;
          if (el.type == 3) values.randomSize = values.randomSize * 15;
          el.scale.set(values.randomSize, values.randomSize, values.randomSize);
        }
        el.position.z += el.speed * deltaTime * 0.8;
        el.rotation.x += 0.01 * deltaTime;
        el.rotation.y += 0.05 * deltaTime;

        const spaceShipBoundingBox = new THREE.Box3().setFromObject(
          state.spaceship
        );
        const asteroidBoundingBox = new THREE.Box3().setFromObject(el);
        if (
          spaceShipBoundingBox.intersectsBox(asteroidBoundingBox) &&
          state.canBeDown
        )
          state.isSpaceshipDown = true;
      });
    }

    if (state.intersectionsLaserLights.length > 0) {
      state.intersectionsLaserLights.forEach((el) => {
        el.position.z += 5 * deltaTime;
      });
    }

    if (state.isMouseButtonDown && !state.isWin) {
      if (state.canShot) {
        onFire(state, scene);
        state.intervalFuncIdForShot = setInterval(() => {
          onFire(state, scene);
        }, 200);
      }
      state.canShot = false;
    } else {
      clearInterval(state.intervalFuncIdForShot);
      state.canShot = true;
    }

    if (state.isSpaceshipDown && !state.isWin && state.canBeDown)
      spaceshipDown(state);
  }
  if (state.scores >= state.scores_to_win) winGame(state);
  if (state.canSendScoresData && !state.scoresDataHasBeenSended)
    addScoresToDB(state);

  requestAnimationFrame(mainLoop);
  renderer.render(scene, camera);
}

drawAim();
drawModalStars("modal-spaceship-canvas", 40);
requestAnimationFrame(mainLoop);
