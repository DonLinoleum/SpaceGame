import * as THREE from 'three'
export function drawStars(scene,state)
{
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 10000; 
    const positions = new Float32Array(starsCount * 3); 
    
    for (let i = 0; i < starsCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 2000; 
        positions[i * 3 + 1] = (Math.random() - 0.5) * 2000; 
        positions[i * 3 + 2] = (Math.random() - 0.5) * 2000; 
    }
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    state.stars = stars
    scene.add(state.stars);
}