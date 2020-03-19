let UIv_header = document.querySelector(".v-header");
let watchVideoBtn = document.getElementById("watch_video");
watchVideoBtn.addEventListener("mousedown", e => {
  let UIdiv = document.createElement("div");
  UIdiv.classname = "overlay";
  UIdiv.innerHTML = `
  <div class="overlay-video-wrap">
        <iframe
          src="https://www.youtube.com/embed/O6ED5BleV_w?autoplay=1&start=4&rel=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
  `;
  UIv_header.parentNode.insertBefore(UIdiv, UIv_header);
  UIv_header.style.display = "none";
  UIdiv.style.display = "flex";
  console.log("btn pressed");
  e.preventDefault();
});
