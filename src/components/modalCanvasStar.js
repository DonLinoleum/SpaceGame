export class ModalCanvasStar
{
    constructor (inputModalCanvas){
        this.x = Math.random() * inputModalCanvas.width
        this.y = Math.random() * inputModalCanvas.height
        this.radius = Math.random() * 1 + 0.05
        this.vx = Math.random() * 150
    }

    update(inputModalCanvas,timeDelta)
    {
        this.x += this.vx * timeDelta
        if (this.x > inputModalCanvas.width)
            this.x = 0
    }

    draw(inputModalCanvasCtx)
    {
        inputModalCanvasCtx.beginPath()
        inputModalCanvasCtx.arc(this.x,this.y,this.radius,0,Math.PI * 2)
        inputModalCanvasCtx.fillStyle = 'white'
        inputModalCanvasCtx.fill()
        inputModalCanvasCtx.closePath()
    }
}