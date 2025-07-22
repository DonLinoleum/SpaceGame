import { ModalCanvasStar } from "../components/modalCanvasStar"
import { Comet } from "../components/modalCometImg"

export function drawModalStars(modalCanvasId,count)
{
      const inputModalCanvas = document.getElementById(modalCanvasId)
      const inputModalCanvasCtx = inputModalCanvas.getContext('2d')

      let stars = []
        for (let i = 0; i < count; i++)
            stars.push(new ModalCanvasStar(inputModalCanvas))
      let comet = new Comet(inputModalCanvas)   

      let lastTimeUpdate = 0  
      function animate(timeUpdate)
      {
        let timeDelta = (timeUpdate - lastTimeUpdate) / 1000
        lastTimeUpdate = timeUpdate
        inputModalCanvasCtx.clearRect(0,0,inputModalCanvas.width,inputModalCanvas.height)
        stars.forEach(el=>{
            el.update(inputModalCanvas, timeDelta)
            el.draw(inputModalCanvasCtx)
        })
        if (lastTimeUpdate > 5000)
          {
            comet.update(inputModalCanvas, timeDelta)
            comet.draw(inputModalCanvasCtx)
          }
        requestAnimationFrame(animate) 
      }
      requestAnimationFrame(animate)
}


export function savePlayerName(inputPLayerName,state)
{
    state.playerName = inputPLayerName.value
}      