function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("active");

  const icon = document.querySelector(".mobile-menu-icon");
  icon.classList.toggle("open");
}

function showSection(sectionId) {
  document.querySelectorAll(".container section").forEach(section => {
    section.classList.remove("active");
    section.style.opacity = "0";
    section.style.transform = "scale(0.95)";
  });

  // Make sure main video is visible (since we removed the other one)
  document.querySelector('.video-container').style.display = "block";

  if (sectionId !== "home") {
    document.querySelector('.video-container').classList.add("blur-video");
  } else {
    document.querySelector('.video-container').classList.remove("blur-video");
  }

  setTimeout(() => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add("active");
      targetSection.style.opacity = "1";
      targetSection.style.transform = "scale(1)";

      // Reset scroll for About section content
      const contentCard = targetSection.querySelector('.content-card');
      if (contentCard) {
        contentCard.scrollTop = 0;
      }
    }
  }, 200);
}
