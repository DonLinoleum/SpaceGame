import { createAsteroids } from "../components/asteroids"
import { createSpaceship } from "../components/spaceship"

export function start(scene,state){
let startBtn = document.querySelector("#start")
let menu = document.querySelector(".menu")
let loading = document.querySelector('.loading__window')
let loadingProcces = document.querySelector(".loading_info__progress")
let loadingPercents = document.querySelector('#loading_percents')
let gameWindow = document.querySelector('#main')

state.scoresDOMelement = document.querySelector('#score_table')
state.xwinglogoDOMelement = document.querySelector("#x-wing-logo") 

if (startBtn){
  startBtn.addEventListener('click',(event)=>{
    menu.style.display = "none"
    loading.style.display = "flex"

    createSpaceship(scene,state)
    createAsteroids(scene,state)

    const intervalId = setInterval(() => {
      loadingPercents.innerText = state.loading.total / state.objectsCount * 100 + "%"
      loadingProcces.style.width = state.loading.total / state.objectsCount * 100 + "%"
      if (state.loading.total / state.objectsCount  * 100 >= 100){
        loading.style.display = "none"
        gameWindow.style.display = "block"
        state.isBegin = true
        clearInterval(intervalId)
        state.scoresDOMelement.innerText = "Scores: " + state.scores
        state.xwinglogoDOMelement.style.display = 'block'
      }
    }, 100);
  })
}
}