let UIsectionTeam = document.querySelector(".section-team");
// let scroll_width = getComputedStyle(document.documentElement).getPropertyValue('--scroll-width');
let children = UIsectionTeam.children;
let sectionTeamWidth = 0;
for (let i = 0; i < children.length; i++) {
  let member = children[i];
  let style = member.currentStyle || window.getComputedStyle(member);

  sectionTeamWidth +=
    parseInt(style.marginLeft) + parseInt(style.marginRight) + 225;
}
console.log(sectionTeamWidth);
sectionTeamWidth =
  -sectionTeamWidth + parseInt(document.documentElement.clientWidth);
document.querySelector("#keyframes").innerHTML = `@keyframes teamScroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -moz-transform:translateX(0);
    -o-transform:translateX(0);
    -ms-transform:translateX(0);
  }

  100% {
    -webkit-transform: translateX(${sectionTeamWidth}px);
    transform: translateX(${sectionTeamWidth}px);
    -moz-transform: translateX(${sectionTeamWidth}px);
    -o-transform: translateX(${sectionTeamWidth}px);
    -ms-transform: translateX(${sectionTeamWidth}px);
  }
}`;

// root.style.setProperty("--scroll-width", "-23" + "px");
