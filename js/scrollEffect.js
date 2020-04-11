let sceneOne = document.querySelector(".scene.one");
let sceneTwo = document.querySelector(".scene.two");
let sceneThree = document.querySelector(".scene.three");
let sceneFour = document.querySelector(".scene.four");
let bg1 = document.querySelector(".bg1");
let bg2 = document.querySelector(".bg2");
let bg3 = document.querySelector(".bg3");
let bg4 = document.querySelector(".bg4");

let visibleY = function (el) {
  let rect = el.getBoundingClientRect(),
    top = rect.top,
    height = rect.height;
  // Check if bottom of the element is off the page
  if (rect.bottom < 0) return false;
  // Check its within the document viewport
  if (top > document.documentElement.clientHeight) return false;
  do {
    rect = el.getBoundingClientRect();
    if (top <= rect.bottom === false) return false;
    // Check if the element is out of view due to a container scrolling
    if (top + height <= rect.top) return false;
    el = el.parentNode;
  } while (el != document.body);
  return true;
};
function attachEvent(element, event, callbackFunction) {
  if (element.addEventListener) {
    element.addEventListener(event, callbackFunction, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + event, callbackFunction);
  }
}
let update = function () {
  if (visibleY(sceneOne)) {
    console.log("sd");
    bg1.style.opacity = "1";

    document.querySelector("nav").style.visibility = "hidden";
  } else {
    bg1.style.opacity = "0";
  }
  if (visibleY(sceneTwo)) {
    if (btnPress && !visibleY(sceneOne)) {
      console.log("pause video");
      btnPress.pauseVideo();
    }
    bg2.style.opacity = "1";
  } else {
    bg2.style.opacity = "0";
  }
  if (visibleY(sceneThree)) {
    bg3.style.opacity = "1";
  } else {
    bg3.style.opacity = "0";
  }
  if (visibleY(sceneFour)) {
    bg4.style.opacity = "1";
  } else {
    bg4.style.opacity = "0";
  }

  let checkerW = document.querySelector(".checkerW");
  let checkerB = document.querySelector(".checkerB");
  let charchuBlack = document.querySelector("#charchu-black");
  let charchuWhite = document.querySelector("#charchu-white");
  if (!btnPress) {
    if (!visibleY(checkerB) && !visibleY(checkerW)) {
      charchuBlack.style.visibility = "hidden";
      charchuWhite.style.visibility = "visible";
    }
  } else {
    if (!visibleY(checkerB) && !visibleY(checkerW)) {
      charchuBlack.style.visibility = "visible";
      charchuWhite.style.visibility = "visible";
    }
  }

  if (!visibleY(checkerB) && visibleY(checkerW)) {
    document.querySelector("nav").style.visibility = "visible";
    charchuBlack.style.visibility = "visible";
    charchuWhite.style.visibility = "hidden";
  }
  if (visibleY(checkerB) && !visibleY(checkerW)) {
    document.querySelector("nav").style.visibility = "visible";
    charchuBlack.style.visibility = "visible";
    charchuWhite.style.visibility = "hidden";
  }
  if (visibleY(checkerB) && visibleY(checkerW)) {
    document.querySelector("nav").style.visibility = "visible";
    charchuBlack.style.visibility = "visible";
    charchuWhite.style.visibility = "hidden";
  }
};
attachEvent(document.querySelector(".parent"), "scroll", update);
// charchu white-black effect
