import * as THREE from 'three'
export function asteroidMoveByShot(asteroid)
{
    const Xdirection = new THREE.Vector3(1, 0, 0)
    const Ydirection = new THREE.Vector3(0, 1, 0)
    let xSpeed = asteroid.position.x >= 0 ? 0.04 : -0.04
    let ySpeed = asteroid.position.y >= 0 ? 0.04 : -0.04

    asteroid.position.add(Xdirection.multiplyScalar(xSpeed))
    asteroid.position.add(Ydirection.multiplyScalar(ySpeed))
}