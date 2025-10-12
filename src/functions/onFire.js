import * as THREE from "three";
export function onFire(state, scene) {
  let spaceshipPosition = state.spaceship.position.clone();

  const geometry_laser = new THREE.BoxGeometry(0.1, 0.1, 1.5);
  const material_laser = new THREE.MeshBasicMaterial({
    color: 0x008000,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  });
  const laserLeft = new THREE.Mesh(geometry_laser, material_laser);
  laserLeft.position.copy(spaceshipPosition);
  laserLeft.rotation.x = state.spaceship.rotation.x * 1.1;
  laserLeft.rotation.y = state.spaceship.rotation.y * 1.2;
  if (window.innerWidth > 992) {
    laserLeft.translateZ(-2.5);
    laserLeft.translateX(-3.0);
    laserLeft.translateY(0);
  } else {
    laserLeft.translateZ(-1.5);
    laserLeft.translateX(-1.2);
    laserLeft.translateY(-1.0);
  }
  state.lasers.push(laserLeft);
  scene.add(laserLeft);

  const laserRight = new THREE.Mesh(geometry_laser, material_laser);
  laserRight.castShadow = true;
  laserRight.position.copy(spaceshipPosition);
  laserRight.rotation.x = state.spaceship.rotation.x;
  laserRight.rotation.y = state.spaceship.rotation.y * 1.2;
  if (window.innerWidth > 992) {
    laserRight.translateZ(-2.5);
    laserRight.translateX(3.0);
    laserRight.translateY(0);
  } else {
    laserRight.translateZ(-1.5);
    laserRight.translateX(1.2);
    laserRight.translateY(-1.0);
  }
  state.lasers.push(laserRight);
  scene.add(laserRight);

  const lightRight = new THREE.PointLight(0x008000, 50, 50);
  lightRight.position.copy(spaceshipPosition);
  if (window.innerWidth > 992) {
    lightRight.translateZ(-1.5);
    lightRight.translateX(2.6);
    lightRight.translateY(0);
  } else {
    lightRight.translateZ(-1);
    lightRight.translateX(1.2);
    lightRight.translateY(-1.0);
  }
  scene.add(lightRight);
  setTimeout(() => {
    scene.remove(lightRight);
  }, 100);

  const lightLeft = new THREE.PointLight(0x008000, 50, 50);
  lightLeft.castShadow = true;
  lightLeft.position.copy(spaceshipPosition);
  if (window.innerWidth > 992) {
    lightLeft.translateZ(-1.5);
    lightLeft.translateX(-2.6);
    lightLeft.translateY(0);
  } else {
    lightLeft.translateZ(-1);
    lightLeft.translateX(-1.2);
    lightLeft.translateY(-1.0);
  }
  scene.add(lightLeft);
  setTimeout(() => {
    scene.remove(lightLeft);
  }, 100);
}
