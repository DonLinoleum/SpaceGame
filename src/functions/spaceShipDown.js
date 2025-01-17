import * as THREE from 'three'

export function spaceshipDown(state)
{
    let final_msg = document.querySelector('.final_msg')
    state.spaceship.rotation.x += 0.1
    state.spaceship.rotation.z += 0.01
    let directon = new THREE.Vector3(0,0,-1)
    state.spaceship.position.add(directon.multiplyScalar(-0.1))
    state.xwinglogoDOMelement.querySelectorAll('path').forEach(el=>el.style.fill = 'red')
    setTimeout(()=>{
        state.isBegin = false
        final_msg.innerText = "YOU DIED"
        final_msg.style.opacity = "1"
        final_msg.style.visibility = "unset"
    },2000)

}