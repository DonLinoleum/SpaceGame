import * as THREE from "three";
export function setLight(scene) {
  const mainlight = new THREE.DirectionalLight(0x87cefa, 1);
  mainlight.position.set(0, 5, 2);
  scene.add(mainlight);

  const spaceShipLight = new THREE.PointLight(0xdda0dd, 100, 250);
  spaceShipLight.position.set(0, 3, -5);
  scene.add(spaceShipLight);

  const asteroidLight = new THREE.PointLight(0x87cefa, 200, 5000);
  asteroidLight.position.set(0, 2, -150);
  scene.add(asteroidLight);

  const helper = new THREE.PointLightHelper(spaceShipLight);
  //scene.add(helper);

  const backLight = new THREE.PointLight(0xff4500, 2, 1);
  backLight.position.set(0, 0, 3);
  scene.add(backLight);
}
