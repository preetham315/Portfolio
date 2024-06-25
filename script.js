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
  const sections = document.querySelectorAll(".skill-content > div");
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
  const buttonIds = [
    "project-btn-1",
    "project-btn-2",
    "project-btn-3",
    "project-btn-4",
    "project-btn-5",
    "project-btn-6",
    "project-btn-7",
    "project-btn-8",
    "project-btn-9",
    "project-btn-10",
    "project-btn-11",
    "project-btn-12",
    // Add more button IDs here if needed
  ];

  const cardIds = [
    "project-card-1",
    "project-card-2",
    "project-card-3",
    "project-card-4",
    "project-card-5",
    "project-card-6",
    "project-card-7",
    "project-card-8",
    "project-card-9",
    "project-card-10",
    "project-card-11",
    "project-card-12",
    // Add more card IDs here if needed
  ];

  let currentProjectIndex = 0;
  const cardsPerPage = 6; // Number of cards to show at once
  const totalProjects = cardIds.length;
  let interval;

  function showProjects(startIndex) {
    cardIds.forEach((id, index) => {
      const card = document.getElementById(id);
      if (index >= startIndex && index < startIndex + cardsPerPage) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  function startRotation() {
    interval = setInterval(() => {
      currentProjectIndex = (currentProjectIndex + cardsPerPage) % totalProjects;
      showProjects(currentProjectIndex);
    }, 4000); // Change every 4 seconds
  }

  function stopRotation() {
    clearInterval(interval);
  }

  // Start rotating projects
  showProjects(currentProjectIndex);
  startRotation();

  buttonIds.forEach((id, index) => {
    const flipButton = document.getElementById(id);
    if (flipButton) {
      flipButton.addEventListener("click", function () {
        const flipCard = document.getElementById(cardIds[index]);
        if (flipCard) {
          stopRotation(); // Stop rotation when a card is flipped
          flipCard.classList.toggle("flip-active");
          setTimeout(() => {
            flipCard.classList.remove("flip-active");
            startRotation(); // Restart rotation after flip-back
          }, 5000); // Flip back after 5 seconds
        }
      });
    }
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

  // Stop rotation on hover and restart on leave
  const projectsSection = document.getElementById("projects");
  projectsSection.addEventListener("mouseenter", stopRotation);
  projectsSection.addEventListener("mouseleave", startRotation);

  // Stop rotation on hovering over individual cards
  cardIds.forEach((id) => {
    const card = document.getElementById(id);
    if (card) {
      card.addEventListener("mouseenter", stopRotation);
      card.addEventListener("mouseleave", startRotation);
    }
  });
});
