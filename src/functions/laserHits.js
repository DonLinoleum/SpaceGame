
import * as THREE from 'three'
import { addScores } from './addScores';
export function laserHit(scene,state,el)
{
    if (state.canCreateLaserHitLight){
        state.canCreateLaserHitLight = false
        const interSectionLight = new THREE.PointLight(0x008000, 500, 500);
        interSectionLight.position.set(el.position.x,el.position.y,el.position.z)
        state.intersectionsLaserLights.push(interSectionLight)
        scene.add(interSectionLight);
        addScores(state)
        setTimeout(() => {
          scene.remove(interSectionLight);
          state.canCreateLaserHitLight = true
        }, 100);
}
}