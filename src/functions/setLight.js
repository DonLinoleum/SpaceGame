import * as THREE from 'three'
export function setLight(scene)
{
    const light = new THREE.DirectionalLight(0xffffff,3)
    light.position.set(0,10,10)
    scene.add(light)

    const backLight = new THREE.PointLight(0xFF4500,2,1)
    backLight.position.set(0,0,3)
    scene.add(backLight)
}