// const images = ["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"];

// let currentIndex = 0;

// function changeBackground() {
//   document.body.style.background = `url('${images[currentIndex]}') no-repeat center center fixed`;
//   document.body.style.backgroundSize = "cover";

//   currentIndex = (currentIndex + 1) % images.length;
// }

// // ცვლის სურათს ყოველ 2 წამში (2000 მილიწამი)
// setInterval(changeBackground, 2000);

// console.log("hello");

function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress-bar-fill");
  progressBars.forEach((bar) => {
    const percent = bar.getAttribute("data-percent");
    bar.style.width = percent + "%";
  });
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function checkProgressBars() {
  const containers = document.querySelectorAll(".progress-container");
  containers.forEach((container) => {
    if (isElementInViewport(container)) {
      animateProgressBars();
    }
  });
}

window.addEventListener("scroll", checkProgressBars);
