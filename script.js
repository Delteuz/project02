//Hamburger follow up
let hamburger = document.getElementById("hamburgerbox");
let togglemenu = document.getElementById("togglemenu");
let ulList = document.getElementById("ulList");
let hamburgerUl = document.getElementById("hamburgerUl");

function isChecked() {
  hamburger.addEventListener("click", function () {
    if (togglemenu.checked) {
      hamburgerUl.style.position = "fixed";
      hamburgerUl.style.top = "30px";
      ulList.style.right = "0";
    } else {
      ulList.style.right = "-300px";
    }
  });
}

// navbar on scroll -hide
var lastScrollTop = 0;
let navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    //if scrolling down

    navbar.style.top = "-18vh";
  } else if (scrollTop === 0) {
    navbar.style.boxShadow = "none";
  } else {
    navbar.style.top = "0";
    navbar.style.boxShadow = "0 1px 0.5px rgb(0, 0, 0, 0.1)";
  }
  lastScrollTop = scrollTop;
});

//reveal elements on scroll
window.addEventListener("scroll", function reveal() {
  let reveals = document.querySelectorAll("#reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("show");
    } else {
      reveals[i].classList.remove("show");
    }
  }
});
