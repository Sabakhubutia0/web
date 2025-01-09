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

// ------------five-section-------------------
document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".five-section-grid .grid-1");

  boxes.forEach((box) => {
    const icon = box.querySelector(".icon");
    const text = box.querySelector(".five-section-iqon-text");
    const title = box.querySelector(".title");
    const description = box.querySelector(".description");

    const status = localStorage.getItem("boxStatus");

    if (status !== "hovered") {
      icon.style.display = "block";
      text.style.display = "block";
      title.style.display = "none";
      description.style.display = "none";
    }

    box.addEventListener("mouseover", function () {
      localStorage.setItem("boxStatus", "hovered");

      icon.style.display = "none";
      text.style.display = "none";
      title.style.display = "block";
      description.style.display = "block";
    });

    box.addEventListener("mouseout", function () {
      localStorage.removeItem("boxStatus");

      icon.style.display = "block";
      text.style.display = "block";
      title.style.display = "none";
      description.style.display = "none";
    });
  });
});

// -----------------section07--------------------------------------

document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    const category = item.getAttribute("data-category");

    document.querySelectorAll(".grid-item").forEach((gridItem) => {
      if (
        category === "all" ||
        gridItem.getAttribute("data-category") === category
      ) {
        gridItem.style.display = "block";
      } else {
        gridItem.style.display = "none";
      }
    });

    document.querySelectorAll(".menu-item").forEach((link) => {
      link.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// --------------footer----------------------

document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const message = document.getElementById("message").value;

    try {
      const response = await fetch(
        "https://borjomi.loremipsum.ge/api/send-message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            website,
            message,
          }),
        }
      );

      const result = await response.json();
      if (result.status === 1) {
        const modal = document.getElementById("modal");
        modal.style.display = "flex";

        document
          .getElementById("closeModal")
          .addEventListener("click", function () {
            modal.style.display = "none";
          });
      } else {
        alert("Error: Unable to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  });
