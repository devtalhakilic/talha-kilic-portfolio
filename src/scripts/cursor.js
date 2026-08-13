/**
 * Custom Neon Ring & Dot Cursor Effect
 */
(function () {
  // Disable custom cursor on touch/mobile devices
  if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768) return;

  const dot = document.getElementById("cursorDot");
  const outline = document.getElementById("cursorOutline");

  if (!dot || !outline) return;

  let mouseX = -100;
  let mouseY = -100;
  let outlineX = -100;
  let outlineY = -100;
  let isHovered = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.18;
    outlineY += (mouseY - outlineY) * 0.18;

    outline.style.left = `${outlineX}px`;
    outline.style.top = `${outlineY}px`;

    requestAnimationFrame(animateOutline);
  }

  animateOutline();

  // Mouse down / click feedback
  window.addEventListener("mousedown", () => {
    document.body.classList.add("cursor-active");
  });

  window.addEventListener("mouseup", () => {
    document.body.classList.remove("cursor-active");
  });

  // Target all interactive elements for dynamic hover effect
  const interactiveSelector = "a, button, input, textarea, [role='button'], .navigationItem, .filterTabBtn, .skillNavDot, .skillDot, .skillSliderBtn, .project, .langToggleBtn, .social, .skillImage";

  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.add("cursor-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.remove("cursor-hover");
    }
  });
})();
