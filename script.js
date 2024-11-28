document.querySelectorAll(".carousel").forEach((carousel) => {
  const slides = carousel.querySelectorAll(".carousel-slide");
  const prevButton = carousel.querySelector(".prev");
  const nextButton = carousel.querySelector(".next");
  let currentIndex = 0;

  // Show first slide
  slides[0].classList.add("active");

  // Function to show slide
  function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    // Show current slide
    slides[index].classList.add("active");
  }

  // Next button click
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  // Previous button click
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  // Optional: Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
  });

  // 3D Models
});
