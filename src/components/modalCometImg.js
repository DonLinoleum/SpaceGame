export class Comet{
    constructor(inputModalCanvas)
    {
        this.img = new Image()
        this.img.src = "src/images/comet.png"
        this.x = 100
        this.y = -50
        this.vx = -20
        this.vy = 20
        this.respawnTimer = 0
        this.isOutside = false
        this.respawnDelaySeconds = 5
    }

    update(inputModalCanvas,timeDelta)
    {
       this.x += this.vx * timeDelta
       this.y += this.vy * timeDelta
       if (this.x < -100 || this.y > inputModalCanvas.height + 50)
          this.isOutside = true
       if (this.isOutside)
          this.#checkRespawn(timeDelta) 
       
    }
    draw(inputModalCanvasCtx)
    {
        inputModalCanvasCtx.drawImage(this.img,this.x,this.y,61,61)  
    }

    #checkRespawn(timeDelta)
    {
        this.respawnTimer += timeDelta
        if (this.respawnTimer > this.respawnDelaySeconds)
            this.#resetValues()
    }

    #resetValues()
    {
        this.x = 100
        this.y = -50
        this.vx = -20
        this.vy = 20
        this.respawnTimer = 0
        this.isOutside = false
    }
}