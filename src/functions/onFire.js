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
    laserLeft.translateZ(-1)
    if (window.innerWidth > 992)
        laserLeft.translateX(-2)
    else{
        laserLeft.translateX(-1)
        laserLeft.translateY(-0.3)
    }
    state.lasers.push(laserLeft)
    scene.add(laserLeft)

    const laserRight = new THREE.Mesh(geometry_laser,material_laser)
    laserRight.rotation.x = state.spaceship.rotation.x 
    laserRight.rotation.y = state.spaceship.rotation.y * 1.2
    laserRight.translateZ(-1)
    if (window.innerWidth > 992)
        laserRight.translateX(2)
    else{
        laserRight.translateX(1)
        laserRight.translateY(-0.3)
    }
    state.lasers.push(laserRight)
    scene.add(laserRight)

    const lightRight = new THREE.PointLight( 0x008000, 10, 10 );
    lightRight.translateZ(-1)
    if (window.innerWidth > 992)
        lightRight.translateX(-2)
    else{
        lightRight.translateX(1)
        lightRight.translateY(-0.3)
    }
    scene.add( lightRight);
    setTimeout(() => {
        scene.remove(lightRight);
    }, 100); 

    const lightLeft = new THREE.PointLight( 0x008000, 10, 10 );
    lightLeft.translateZ(-1)
    if (window.innerWidth > 992)
        lightLeft.translateX(2)
    else{
        lightLeft.translateX(-1)
        lightLeft.translateY(-0.3)
    }
    scene.add(lightLeft);
    setTimeout(() => {
        scene.remove(lightLeft);
    }, 100);
  }