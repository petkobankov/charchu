let UItos = document.getElementById("tos");
let UIclosebtn = document.getElementById("close");
UIclosebtn.addEventListener("mousedown", e => {
  UItos.style.display = "none";
  e.preventDefault();
});
