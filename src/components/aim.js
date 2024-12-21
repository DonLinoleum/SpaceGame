import * as THREE from 'three'

export const drawAim = () => {
    const aimCanvas = document.getElementById('aim')
    const context = aimCanvas.getContext('2d')
    aimCanvas.width = 20
    aimCanvas.height = 20

    context.clearRect(0,0,aimCanvas.width,aimCanvas.height)
    context.strokeStyle = 'black'
    context.lineWidth = 2

    context.beginPath()
    context.moveTo(0,10)
    context.lineTo(20,10)
    context.stroke()

    context.beginPath()
    context.moveTo(10,0)
    context.lineTo(10,20)
    context.stroke()
}