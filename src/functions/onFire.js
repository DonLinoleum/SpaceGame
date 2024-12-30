import * as THREE from 'three'
export function onFire(event,state,scene){
    const geometry_laser = new THREE.BoxGeometry(0.1,0.1,1.5)
    const material_laser = new THREE.MeshBasicMaterial({
      color: 0x008000, 
      transparent: true,
      opacity: 0.8,
      blending:THREE.AdditiveBlending
    })
    const laserLeft = new THREE.Mesh(geometry_laser,material_laser)
    laserLeft.rotation.x = state.spaceship.rotation.x * 1.1
    laserLeft.rotation.y = state.spaceship.rotation.y * 1.2
    if (window.innerWidth > 992){
        laserLeft.translateZ(-1.8)
        laserLeft.translateX(-2.6)
        laserLeft.translateY(-0.75)
    }
    else{
        laserLeft.translateZ(-1.5)
        laserLeft.translateX(-1.2)
        laserLeft.translateY(-1.0)
    }
    state.lasers.push(laserLeft)
    scene.add(laserLeft)

    const laserRight = new THREE.Mesh(geometry_laser,material_laser)
    laserRight.rotation.x = state.spaceship.rotation.x 
    laserRight.rotation.y = state.spaceship.rotation.y * 1.2
    if (window.innerWidth > 992){
        laserRight.translateZ(-1.8)
        laserRight.translateX(2.6)
        laserRight.translateY(-0.75)
    }
    else{
        laserRight.translateZ(-1.5)
        laserRight.translateX(1.2)
        laserRight.translateY(-1.0)
    }
    state.lasers.push(laserRight)
    scene.add(laserRight)

    const lightRight = new THREE.PointLight( 0x008000, 50, 50);
    if (window.innerWidth > 992){
        lightRight.translateZ(-1)
        lightRight.translateX(-2.6)
        lightRight.translateY(-0.75)
    }
    else{
        lightRight.translateZ(-1)
        lightRight.translateX(1.2)
        lightRight.translateY(-1.0)
    }
    scene.add( lightRight);
    setTimeout(() => {
        scene.remove(lightRight);
    }, 100); 

    const lightLeft = new THREE.PointLight( 0x008000, 50, 50);
    if (window.innerWidth > 992){
        lightLeft.translateZ(-1)
        lightLeft.translateX(2.6)
        lightLeft.translateY(-0.75)
    }
    else{
        lightLeft.translateZ(-1)
        lightLeft.translateX(-1.2)
        lightLeft.translateY(-1.0)
    }
    scene.add(lightLeft);
    setTimeout(() => {
        scene.remove(lightLeft);
    }, 100);
  }