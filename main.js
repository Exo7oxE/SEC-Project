var btn = document.querySelector(".button");

function buttonClicked() {
 btn.classList.add("anim");
 setTimeout(() -> {
  btn.classList.remove("anim");
 }, 1000);
}
