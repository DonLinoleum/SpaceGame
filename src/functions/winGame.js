export async function winGame(state) {
  let final_msg = document.querySelector(".final_msg");
  let final_msg_wrapper = document.querySelector(".final_msg__wrapper");
  state.isWin = true;
  state.spaceship.translateZ(-0.5);
  setTimeout(() => {
    state.isBegin = false;
    state.canSendScoresData = true;
    final_msg.innerText = "YOU WIN!";
    final_msg.style.color = "green";
    final_msg_wrapper.style.opacity = "1";
    final_msg_wrapper.style.visibility = "unset";
  }, 2000);
}
