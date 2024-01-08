var btn = document.querySelector(".button");

function motionClicked() {
 btn.classList.add("anim");
 setTimeout(() -> {
  btn.classList.remove("anim");
 }, 1000);
}
