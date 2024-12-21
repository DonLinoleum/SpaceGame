import * as THREE from 'three'
import { drawAim } from './components/aim';
import { setLight } from './functions/setLight';
import { onMouseMove } from './functions/onMouseMove';
import { onTouchMove } from './functions/onToucheMove';
import { onFire } from './functions/onFire';
import { generateRandomValues } from './functions/generateRandomValues';
import './style.css'
import { createSpaceship } from './components/spaceship';
import { createAsteroids } from './components/asteroids';
import { drawStars } from './components/stars';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,300);

const renderer = new THREE.WebGLRenderer({canvas:document.getElementById('main')});
const aimCanvas = document.getElementById('aim')
const mouse = new THREE.Vector2()

renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
//const loaderTexture = new THREE.TextureLoader();
//loaderTexture.load('src/images/bg.jpg' , function(texture){scene.background = texture;});

let state = {spaceship:null,lasers:[],asteroids:[],stars:null}
createSpaceship(scene,state);
createAsteroids(scene,state)
drawStars(scene,state)
setLight(scene)

if (window.innerWidth > 992)
  window.addEventListener('mousemove',(event)=>{onMouseMove(event,state,aimCanvas,mouse)})
else
  window.addEventListener('touchmove',(event)=>{onTouchMove(event,state,aimCanvas,mouse)})
window.addEventListener('click',(event)=>{onFire(event,state,scene)})

camera.position.z = 5;
function animate(){
  requestAnimationFrame(animate)
  renderer.render(scene,camera)

  state.stars.translateZ(5)
  if (state.stars.position.z > 700)
    state.stars.position.z = -200

  if (state.lasers.length > 0){
    state.lasers.forEach(el=>{
      el.translateZ(-0.5)
    })
  }
  if (state.asteroids.length > 0){
    state.asteroids.forEach(el=>{
      if (el.position.z > 20){
        let values = generateRandomValues()
        el.position.z = -300
        el.speed = values.randomSpeed
        el.position.x = values.randomX
        el.position.y = values.randomY
        if (el.type == 3)
          values.randomSize = values.randomSize * 15
        el.scale.set(values.randomSize,values.randomSize,values.randomSize)
      }
      el.position.z += el.speed
      el.rotation.x += 0.01
      el.rotation.y += 0.05
    })
  }
  drawAim()
}
animate()