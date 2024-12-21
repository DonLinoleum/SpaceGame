import * as THREE from 'three'
export function setLight(scene)
{
    const light = new THREE.DirectionalLight(0xffffff,5)
    light.position.set(0,10,10)
    scene.add(light)

   
}