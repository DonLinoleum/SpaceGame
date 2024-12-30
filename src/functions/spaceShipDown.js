import * as THREE from 'three'

export function spaceshipDown(state)
{
    state.spaceship.rotation.x += 0.1
    state.spaceship.rotation.z += 0.01
    let directon = new THREE.Vector3(0,0,-1)
    state.spaceship.position.add(directon.multiplyScalar(-0.1))
    setTimeout(()=>{
        state.isBegin = false
        document.querySelector('.you_died_msg').style.opacity = "1"
        document.querySelector('.you_died_msg').style.visibility = "unset"
    },2000)

}