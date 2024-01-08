var btn = document.querySelector(".button");
let num = 0;

function motionClicked() {
 num++;
 btn.classList.add("anim");
 setTimeout(() -> {
  btn.classList.remove("anim");
 }, 1000);
}
