function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const titles = [
    "Data Scientist",
    "Machine Learning Engineer",
    "Business Analyst",
    "Data Analyst",
  ];
  let currentIndex = 0;
  const dynamicTitle = document.getElementById("dynamic-title");

  function updateTitle() {
    dynamicTitle.classList.add("hidden");
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % titles.length;
      dynamicTitle.textContent = titles[currentIndex];
      dynamicTitle.classList.remove("hidden");
    }, 500); // Match this with the CSS transition duration
  }

  setInterval(updateTitle, 2000); // Change title every 1 second
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".experience-content > div");
  let current = 0;
  let interval;

  function showSection(index) {
    sections.forEach((section, i) => {
      section.classList.remove("active");
      if (i === index) {
        section.classList.add("active");
      }
    });
  }

  function startTransition() {
    interval = setInterval(() => {
      sections[current].classList.add("hidden");
      setTimeout(() => {
        sections[current].classList.remove("hidden");
        current = (current + 1) % sections.length;
        showSection(current);
      }, 1500); // Match this with the CSS transition duration
    }, 5000); // Change every 5 seconds for a slower transition
  }

  function stopTransition() {
    clearInterval(interval);
  }

  sections.forEach((section) => {
    section.addEventListener("mouseenter", stopTransition);
    section.addEventListener("mouseleave", startTransition);
  });

  showSection(current);
  startTransition();
});

document.addEventListener("DOMContentLoaded", function () {
  const flipButtons = document.querySelectorAll(".flip-btn");
  const flipCards = document.querySelectorAll(".flip-card");

  flipButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const flipCard =
        this.closest(".about-containers").querySelector(".flip-card");
      flipCard.classList.toggle("flip-active");
      setTimeout(() => {
        flipCard.classList.remove("flip-active");
      }, 5000); // Flip back after 5 seconds
    });
  });

  // Ensure text fits within flip card
  const adjustTextSize = () => {
    const descriptions = document.querySelectorAll(".project-description");
    descriptions.forEach((description) => {
      let fontSize = parseInt(window.getComputedStyle(description).fontSize);
      while (
        description.scrollHeight > description.clientHeight &&
        fontSize > 10
      ) {
        fontSize -= 1;
        description.style.fontSize = `${fontSize}px`;
      }
    });
  };

  window.addEventListener("resize", adjustTextSize);
  adjustTextSize();
});