import * as THREE from 'three'
export function spaceShipMove(state)
{
    const targetSpaceShipPosition = new THREE.Vector3(state.spaceship.position.x, state.spaceship.position.y, state.spaceship.position.z);
    if (state.keysPressed['KeyW'] && state.spaceship.position.y < 2) {        
        targetSpaceShipPosition.y += state.lerpSpaceshipSpeed; 
    }
    if (state.keysPressed['KeyS'] && state.spaceship.position.y > -2) {
        targetSpaceShipPosition.y -= state.lerpSpaceshipSpeed; 
    }
    if (state.keysPressed['KeyA'] && state.spaceship.position.x > -2) {
        targetSpaceShipPosition.x -= state.lerpSpaceshipSpeed; ; 
    }
    if (state.keysPressed['KeyD'] && state.spaceship.position.x < 2) {
        targetSpaceShipPosition.x += state.lerpSpaceshipSpeed; ; 
    }
  state.spaceship.position.lerp(targetSpaceShipPosition, state.lerpSpaceshipSpeed);
}