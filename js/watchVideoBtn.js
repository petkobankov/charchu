let btnPress = false;
let UIv_header = document.querySelector(".bg1");
let watchVideoBtn = document.getElementById("watch_video");
watchVideoBtn.addEventListener("mousedown", (e) => {
  document.querySelector(".header-content").remove();
  UIv_header.innerHTML = "";
  document.querySelector("#player").style.display = "block";
  try {
    player.playVideo();
  } catch (err) {
    setTimeout(function () {
      console.log("yolo");
      player.playVideo();
    }, 1000);
  }
  btnPress = true;
  e.preventDefault();
});
let tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    ),
    width: Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    ),
    videoId: "O6ED5BleV_w",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
    playerVars: {
      enablejsapi: 1,
      rel: 0,
      autoplay: 0,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.seekTo(4, true);
  event.target.pauseVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
let done = false;
function onPlayerStateChange(event) {
  // if (event.data == YT.PlayerState.PLAYING && !done) {
  //   setTimeout(stopVideo, 6000);
  //   done = true;
  // }
}
function stopVideo() {
  player.stopVideo();
}
