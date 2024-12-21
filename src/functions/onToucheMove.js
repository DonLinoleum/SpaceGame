export function onTouchMove(event,state,aimCanvas,mouse){
    mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.touches[0].clientY / window.innerHeight) *2 + 1
    aimCanvas.style.top = event.touches[0].clientY + 'px'
    aimCanvas.style.left = event.touches[0].clientX + 'px'
    state.spaceship.rotation.y = -mouse.x 
    state.spaceship.rotation.x = mouse.y 

   }