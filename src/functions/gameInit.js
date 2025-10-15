import { drawStars } from "../components/stars";
import { onMouseMove } from "./onMouseMove";
import { onTouchMove } from "./onToucheMove";
import { setLight } from "./setLight";
import { start } from "./start";
export function gameInit(scene, state, camera, renderer, THREE) {
  const aimCanvas = document.getElementById("aim");
  const mouse = new THREE.Vector2();

  const loaderTexture = new THREE.TextureLoader();
  loaderTexture.load("src/images/bg3.jpg", function (texture) {
    texture.colorSpace = THREE.SRGBColorSpace;
    scene.background = texture;
  });

  drawStars(scene, state, THREE);
  setLight(scene, THREE);
  start(scene, state);

  window.addEventListener("mousedown", (event) => {
    state.isMouseButtonDown = true;
  });
  window.addEventListener("mouseup", (event) => {
    state.isMouseButtonDown = false;
  });
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  if (window.innerWidth > 992)
    window.addEventListener("mousemove", (event) => {
      onMouseMove(event, state, aimCanvas, mouse, scene);
    });
  else
    window.addEventListener("touchmove", (event) => {
      onTouchMove(event, state, aimCanvas, mouse, scene);
    });

  function handleKeyDown(event) {
    state.keysPressed[event.code] = true;
  }
  function handleKeyUp(event) {
    state.keysPressed[event.code] = false;
  }
}
