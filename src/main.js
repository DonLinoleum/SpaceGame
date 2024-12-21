import * as THREE from 'three'
import { drawAim } from './components/aim';
import { setLight } from './functions/setLight';
import { onMouseMove } from './functions/onMouseMove';
import { onTouchMove } from './functions/onToucheMove';
import { onFire } from './functions/onFire';
import './style.css'
import { createSpaceship } from './components/spaceship';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,100);

const renderer = new THREE.WebGLRenderer({canvas:document.getElementById('main')});
const aimCanvas = document.getElementById('aim')
const mouse = new THREE.Vector2()
const loaderTexture = new THREE.TextureLoader();

renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
loaderTexture.load('src/images/bg.jpg' , function(texture){scene.background = texture;});

let state = {spaceship:null,lasers:[]}
createSpaceship(scene,state);
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
  
  if (state.lasers.length > 0){
    state.lasers.forEach(el=>{
      el.translateZ(-0.5)
    })
  }
  drawAim()
}
animate()