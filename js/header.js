const headerNode = document.getElementsByTagName("header")[0];
const menuModalNode = document.getElementById("menu-modal");
let menuOpen = false;

headerNode.innerHTML = `<img id="header-menu" src="icons/menu.svg" onclick="openMenu()" title="menu">
  <h1 id="header-title" title="test" onclick="window.location.assign('index.html')">TEST</h1>
  <img id="profile" src="icons/account_circle.svg" title="profile">`;
  
menuModalNode.innerHTML = `<div id="menu">
    <div>
      <p>LANGUAGE</p>
      <p>en</p>
    </div>
    <div>
      <p>THEME</p>
      <img src="icons/light_mode.svg">
    </div>
    <div>
      <div>BUY ME A COFFEE</div>
    </div>
    <div id="menu-about">
      <p>ABOUT US</p>
      <p>FAQs</p>
      <p>T&C</p>
    </div>
  </div>`;
  
const menuNode = document.getElementById("menu");
const headerMenuNode = document.getElementById("header-menu");

function openMenu() {
  const c = menuModalNode.classList;
  menuAnimation();
  if (menuOpen) {
    menuNode.style.animation = "slideleft 0.5s ease-in-out";
    setTimeout((() => c.add("hide")), 500);
    menuOpen = !menuOpen;
  } else if (!menuOpen) {
    if (c.contains("hide")) {
      c.remove("hide");
      menuNode.style.animation = "slideright 0.5s ease-in-out";
      menuOpen = !menuOpen;
    }
  }
}

function menuModalClick(event) {
  if (!event.target.closest("#menu")) {
    openMenu();
  }
}

function menuAnimation() {
  if (menuOpen) {
    headerMenuNode.style.animation = "rotate-clock 0.25s ease-in";
    setTimeout((() => {
      headerMenuNode.src="icons/menu.svg";
      headerMenuNode.style.animation = "rotate-clock2 0.25s ease-out";
    }), 200);
  } else {
    headerMenuNode.style.animation = "rotate-anticlock 0.25s ease-in";
    setTimeout((() => {
      headerMenuNode.src="icons/close.svg";
      headerMenuNode.style.animation = "rotate-anticlock2 0.25s ease-out";
    }), 200);
  }
}