export async function winGame(state) {
  let final_msg = document.querySelector(".final_msg");
  state.isWin = true;
  state.spaceship.translateZ(-0.5);
  setTimeout(() => {
    state.isBegin = false;
    state.canSendScoresData = true;
    final_msg.innerText = "YOU WIN!";
    final_msg.style.color = "green";
    final_msg.style.opacity = "1";
    final_msg.style.visibility = "unset";
  }, 2000);
}
