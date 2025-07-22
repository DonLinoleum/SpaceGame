import { ModalCanvasStar } from "./modalCanvasStar"

export function drawModalStars(modalCanvasId,count)
{
      const inputModalCanvas = document.getElementById(modalCanvasId)
      const inputModalCanvasCtx = inputModalCanvas.getContext('2d')

      let stars = []
        for (let i = 0; i < count; i++)
            stars.push(new ModalCanvasStar(inputModalCanvas))

      function animate()
      {
        inputModalCanvasCtx.clearRect(0,0,inputModalCanvas.width,inputModalCanvas.height)
        stars.forEach(el=>{
            el.update(inputModalCanvas)
            el.draw(inputModalCanvasCtx)
        })
        requestAnimationFrame(animate) 
    }
      animate()
}


export function savePlayerName(inputPLayerName,state)
{
    state.playerName = inputPLayerName.value
}      