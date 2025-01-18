import { drawStars } from "../components/stars"
import { setLight } from "./setLight"
import { start } from "./start"
export function gameInit(scene,state)
{
    drawStars(scene,state)
    setLight(scene)
    start(scene,state)

    window.addEventListener('mousedown',(event)=>{state.isMouseButtonDown = true})
    window.addEventListener('mouseup',(event)=>{state.isMouseButtonDown = false})
    window.addEventListener('keydown',handleKeyDown)
    window.addEventListener('keyup',handleKeyUp)

    function handleKeyDown(event) {
        state.keysPressed[event.code] = true;
      }
    function handleKeyUp(event) {
        state.keysPressed[event.code] = false;
      }
}