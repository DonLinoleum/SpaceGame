
export function start(state){
let startBtn = document.querySelector("#start")
if (startBtn){
  startBtn.addEventListener('click',(event)=>{
    document.querySelector(".menu").style.display = "none"
    document.querySelector("#main").style.display = "inline"
    state.isBegin = true
  })
}
}