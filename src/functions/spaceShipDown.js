import * as THREE from 'three'
import { setRedBorderByHitten } from './setRedBorderByHitten'

export function spaceshipDown(state)
{
    if (state.lifes > 1){
        state.xwinglogoDOMelement.querySelectorAll('path').forEach(el=>el.style.fill = 'orange')
        state.lifes--
        state.canBeDown = false
        state.isSpaceshipDown = false
        setRedBorderByHitten()
        setInterval(() => {
            state.canBeDown = true
        }, 2000);
    }
    else{
    let final_msg = document.querySelector('.final_msg')
    state.spaceship.rotation.x += 0.1
    state.spaceship.rotation.z += 0.01
    let directon = new THREE.Vector3(0,0,-1)
    state.spaceship.position.add(directon.multiplyScalar(-0.1))
    state.xwinglogoDOMelement.querySelectorAll('path').forEach(el=>el.style.fill = 'red')
    setRedBorderByHitten()
    setTimeout(()=>{
        state.isBegin = false
        final_msg.innerText = "YOU DIED"
        final_msg.style.opacity = "1"
        final_msg.style.visibility = "unset"
    },2000)
}
}