window.onload = function () {
  /* ---------- Background Slider ------------- */

  let bgImages = [
    "landing1.jpg",
    "landing2.jpg",
    "landing3.jpg",
    "landing4.jpg",
  ];

  let index = 0;

  let home = document.getElementById("home");

  let spans = document.querySelectorAll("#home .bullets span");
  for (let i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
      index = i;
      changeBackground();
    };
  }

  document.getElementById("nextImage").onclick = function () {
    index++;
    changeBackground();
  };

  document.getElementById("prevImage").onclick = function () {
    index--;
    changeBackground();
  };

  function changeBackground() {
    if (index >= bgImages.length) {
      index = 0;
    } else if (index < 0) {
      index = bgImages.length - 1;
    }

    home.style.backgroundImage = "url(images/" + bgImages[index] + ")";
    changeActive(index);
  }

  function changeActive(index) {
    for (let i = 0; i < spans.length; i++) {
      spans[i].classList.remove("active");
    }
    spans[index].classList.add("active");
  }

  /* ---------- Toggle Menu ------------- */

  document.getElementById("navBtn").onclick = function () {
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("open");
  };

  window.onscroll = function () {
    let moveUp = document.getElementById("moveUp");
    if (document.documentElement.scrollTop > 50) {
      moveUp.style.visibility = "visible";
      moveUp.style.opacity = "1";
      moveUp.style.bottom = "20px";
    } else {
      moveUp.style.visibility = "hidden";
      moveUp.style.opacity = "0";
      moveUp.style.bottom = "-100px";
    }
  };
};
