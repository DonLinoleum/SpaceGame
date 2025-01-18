import * as THREE from 'three'
import { drawAim } from './components/aim';
import { setLight } from './functions/setLight';
import { onMouseMove } from './functions/onMouseMove';
import { onTouchMove } from './functions/onToucheMove';
import { onFire } from './functions/onFire';
import { generateRandomValues } from './functions/generateRandomValues';
import { drawStars } from './components/stars';
import { start } from './functions/start';

import { laserHit } from './functions/laserHits';
import { asteroidMoveByShot } from './functions/asteroidMoveByShot';
import { spaceshipDown } from './functions/spaceShipDown';
import { winGame } from './functions/winGame';

import './style.css'
import { gameInit } from './functions/gameInit';
import { spaceShipMove } from './functions/spaceShipMove';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,300);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({canvas:document.getElementById('main')});
const aimCanvas = document.getElementById('aim')
const mouse = new THREE.Vector2()
const raycaster = new THREE.Raycaster()

renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
const loaderTexture = new THREE.TextureLoader();
loaderTexture.load('src/images/bg3.jpg' , function(texture){
  texture.colorSpace = THREE.SRGBColorSpace;
  scene.background = texture;
});

let state = {
  isBegin:false,
  keysPressed:{},
  spaceship:null,
  lasers:[],
  asteroids:[],
  stars:null,
  intersectionsLaserLights:[],
  canCreateLaserHitLight:true,
  loading:{total:0},
  objectsCount:4,
  isMouseButtonDown: false,
  intervalFuncIdForShot:null,
  canShot: true,
  canBeDown: true,
  isSpaceshipDown: false,
  lerpSpaceshipSpeed: 0.2,
  isWin: false,
  scores: 0,
  scores_to_win: 200,
  lifes:2,
  scoresDOMelement: null,
  xwinglogoDOMelement: null
}
gameInit(scene,state)

if (window.innerWidth > 992)
  window.addEventListener('mousemove',(event)=>{onMouseMove(event,state,aimCanvas,mouse,scene)})
else
  window.addEventListener('touchmove',(event)=>{onTouchMove(event,state,aimCanvas,mouse,scene)})
//window.addEventListener('click',(event)=>{onFire(event,state,scene)})


function mainLoop(){
  requestAnimationFrame(mainLoop)
  renderer.render(scene,camera)
  if (state.isBegin){

  spaceShipMove(state)
  
  state.stars.translateZ(5)
  if (state.stars.position.z > 700)
    state.stars.position.z = -200
  
  if (state.lasers.length > 0){
    state.lasers.forEach(el=>{
      el.translateZ(-0.5)
      const laserBoundingBox = new THREE.Box3().setFromObject(el);
      if (state.asteroids.length > 0){
        state.asteroids.forEach(asteroid=>{
          const asteroidBoundingBox = new THREE.Box3().setFromObject(asteroid);
          if (laserBoundingBox.intersectsBox(asteroidBoundingBox)){
            scene.remove(el)
            laserHit(scene,state,el)
            asteroidMoveByShot(asteroid)
          }         
        })
      }
    })
  }

  if (state.asteroids.length > 0){
    state.asteroids.forEach(el=>{
      if (el.position.z > 20){
        let values = generateRandomValues()
        el.position.z = -300
        el.speed = values.randomSpeed
        el.position.x = values.randomX
        el.position.y = values.randomY
        if (el.type == 3)
          values.randomSize = values.randomSize * 15
        el.scale.set(values.randomSize,values.randomSize,values.randomSize)
      }
      el.position.z += el.speed
      el.rotation.x += 0.01
      el.rotation.y += 0.05

      const spaceShipBoundingBox = new THREE.Box3().setFromObject(state.spaceship)
      const asteroidBoundingBox = new THREE.Box3().setFromObject(el);
      if (spaceShipBoundingBox.intersectsBox(asteroidBoundingBox) && state.canBeDown)
        state.isSpaceshipDown = true
    })
  }

  if (state.intersectionsLaserLights.length > 0){
    state.intersectionsLaserLights.forEach(el=>{el.position.z += 5})
  }

  if (state.isMouseButtonDown && !state.isWin){
      if (state.canShot){
        onFire(state,scene)
        state.intervalFuncIdForShot = setInterval(()=>{
        onFire(state,scene)
      },200)
  }
  state.canShot = false
  }
  else{
    clearInterval(state.intervalFuncIdForShot)
    state.canShot = true
  }

  if (state.isSpaceshipDown && !state.isWin && state.canBeDown)
    spaceshipDown(state)

}
  if (state.scores >= state.scores_to_win)
    winGame(state)
}
drawAim()
mainLoop()