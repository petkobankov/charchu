let UIv_header = document.querySelector(".v-header");
let UIoverlay = document.querySelector(".overlay");
let watchVideoBtn = document.getElementById("watch_video");
watchVideoBtn.addEventListener("mousedown", e => {
  UIv_header.style.display = "none";
  UIoverlay.style.display = "flex";
  e.preventDefault();
});
