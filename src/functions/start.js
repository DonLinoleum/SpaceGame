import { createAsteroids } from "../components/asteroids"
import { savePlayerName } from "./modalStars"
import { createSpaceship } from "../components/spaceship"

export function start(scene,state){
let startBtn = document.querySelector("#start")
let goStartModalBtn = document.querySelector('#start-modal-go')

let startModal = document.querySelector('#start-modal')

let playerInputModal = document.querySelector('#player-input-name-modal')
let modalPlayerNameSubmit = document.getElementById('player-input-name-modal-go')
let inputPLayerName = document.getElementById('player-input-name')
let modalPlayerNameTitle = document.getElementById('player-input-name-modal__title')

let menu = document.querySelector(".menu")
let loading = document.querySelector('.loading__window')
let loadingProcces = document.querySelector(".loading_info__progress")
let loadingPercents = document.querySelector('#loading_percents')
let gameWindow = document.querySelector('#main')

state.scoresDOMelement = document.querySelector('#score-table')
state.xwinglogoDOMelement = document.querySelector("#x-wing-logo") 

startBtn.addEventListener('click',(event)=>{
    playerInputModal.style.display = "flex"
    inputPLayerName.focus()
})

modalPlayerNameSubmit.addEventListener('click',()=>{
    if (inputPLayerName.value == '' || inputPLayerName.value == null){
        modalPlayerNameTitle.classList.add('modal_input__invalid')
        return
    }
    playerInputModal.style.display = "none"
    modalPlayerNameTitle.value = null
    savePlayerName(inputPLayerName,state)
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

        clearInterval(intervalId)
        state.scoresDOMelement.innerText = "Scores: " + state.scores
        state.xwinglogoDOMelement.style.display = 'block'
        startModal.style.display = 'flex'
        
        goStartModalBtn.addEventListener('click',()=>{
          startModal.style.display = 'none'
          state.isBegin = true
        })
      }
    }, 100);
  }
)
}
