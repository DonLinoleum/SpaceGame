export function onMouseMove(event,state,aimCanvas,mouse){
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) *2 + 1
    aimCanvas.style.top = event.clientY + 'px'
    aimCanvas.style.left = event.clientX + 'px'
    if (state.isBegin){
        state.spaceship.rotation.y = -mouse.x 
        state.spaceship.rotation.x = mouse.y 
    }
   }