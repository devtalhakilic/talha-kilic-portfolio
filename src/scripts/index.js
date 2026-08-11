let navbar = document.getElementById("navbar")
let firstSection = document.getElementById("firstSection")
let secondSection = document.getElementById("secondSection")
let experienceSection = document.getElementById("experienceSection")
let thirdSection = document.getElementById("thirdSection")
let fourthSection = document.getElementById("fourthSection")
let aboutMeLink = document.getElementById("aboutMeLink")
let skillsLink = document.getElementById("skillsLink")
let experienceLink = document.getElementById("experienceLink")
let projectsLink = document.getElementById("projectsLink")
let socialsLink = document.getElementById("socialsLink")
let hamburgerButton = document.getElementById("hamburgerButton")
let responsiveNavigationBar = document.getElementById("responsiveNavigationBar")
let hamburgerIcon = document.getElementById("hamburgerIcon")
let body = document.getElementById("body")
let aboutMeLink1 = document.getElementById("aboutMeLink1")
let skillsLink1 = document.getElementById("skillsLink1")
let experienceLink1 = document.getElementById("experienceLink1")
let projectsLink1 = document.getElementById("projectsLink1")
let socialsLink1 = document.getElementById("socialsLink1")
const buffer = 400

let typed = new Typed("#skill", {
  strings: ["a Junior Front End Developer", "From Turkey", "14 years old"],
  typeSpeed: 60, // hız
  backSpeed: 40, // geri silme hızı
  loop: true, // sonsuz döngü
})

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled")
    navbar.classList.remove("non-scrolled")
  }

  if (window.scrollY == 0) {
    navbar.classList.remove("scrolled")
    navbar.classList.add("non-scrolled")
  }
  navColor()
})

window.addEventListener("load", () => {
  navColor()
})

function navColor() {
  if (
    window.scrollY >= firstSection.offsetTop &&
    window.scrollY < secondSection.offsetTop - buffer
  ) {
    aboutMeLink.style.color = "#07ff39"
    skillsLink.style.color = "white"
    if (experienceLink) experienceLink.style.color = "white"
    projectsLink.style.color = "white"
    socialsLink.style.color = "white"

    aboutMeLink1.style.color = "#07ff39"
    skillsLink1.style.color = "white"
    if (experienceLink1) experienceLink1.style.color = "white"
    projectsLink1.style.color = "white"
    socialsLink1.style.color = "white"
  } else if (
    window.scrollY >= secondSection.offsetTop - buffer &&
    window.scrollY < experienceSection.offsetTop - buffer
  ) {
    aboutMeLink.style.color = "white"
    skillsLink.style.color = "#07ff39"
    if (experienceLink) experienceLink.style.color = "white"
    projectsLink.style.color = "white"
    socialsLink.style.color = "white"

    aboutMeLink1.style.color = "white"
    skillsLink1.style.color = "#07ff39"
    if (experienceLink1) experienceLink1.style.color = "white"
    projectsLink1.style.color = "white"
    socialsLink1.style.color = "white"
  } else if (
    window.scrollY >= experienceSection.offsetTop - buffer &&
    window.scrollY < thirdSection.offsetTop - buffer
  ) {
    aboutMeLink.style.color = "white"
    skillsLink.style.color = "white"
    if (experienceLink) experienceLink.style.color = "#07ff39"
    projectsLink.style.color = "white"
    socialsLink.style.color = "white"

    aboutMeLink1.style.color = "white"
    skillsLink1.style.color = "white"
    if (experienceLink1) experienceLink1.style.color = "#07ff39"
    projectsLink1.style.color = "white"
    socialsLink1.style.color = "white"
  } else if (
    window.scrollY >= thirdSection.offsetTop - buffer &&
    window.scrollY < fourthSection.offsetTop - buffer
  ) {
    aboutMeLink.style.color = "white"
    skillsLink.style.color = "white"
    if (experienceLink) experienceLink.style.color = "white"
    projectsLink.style.color = "#07ff39"
    socialsLink.style.color = "white"

    aboutMeLink1.style.color = "white"
    skillsLink1.style.color = "white"
    if (experienceLink1) experienceLink1.style.color = "white"
    projectsLink1.style.color = "#07ff39"
    socialsLink1.style.color = "white"
  } else if (window.scrollY >= fourthSection.offsetTop - buffer) {
    aboutMeLink.style.color = "white"
    skillsLink.style.color = "white"
    if (experienceLink) experienceLink.style.color = "white"
    projectsLink.style.color = "white"
    socialsLink.style.color = "#07ff39"

    aboutMeLink1.style.color = "white"
    skillsLink1.style.color = "white"
    if (experienceLink1) experienceLink1.style.color = "white"
    projectsLink1.style.color = "white"
    socialsLink1.style.color = "#07ff39"
  }
}

function hamburgerMenu() {
  console.log("TIKLANDI")
  if (responsiveNavigationBar.classList.contains("hiddenNav")) {
    body.style.overflow = "hidden"
    responsiveNavigationBar.classList.remove("hiddenNav")
    responsiveNavigationBar.classList.add("animate__fadeIn")
    responsiveNavigationBar.classList.remove("animate__fadeOut")
    hamburgerIcon.classList.remove("fa-bars")
    hamburgerIcon.classList.add("fa-xmark")
  } else if (responsiveNavigationBar.classList.contains("hiddenNav") == false) {
    body.style.overflow = "scroll"
    responsiveNavigationBar.classList.remove("animate__fadeIn")
    responsiveNavigationBar.classList.add("animate__fadeOut")
    setTimeout(() => {
      responsiveNavigationBar.classList.add("hiddenNav")
    }, 400)
    hamburgerIcon.classList.add("fa-bars")
    hamburgerIcon.classList.remove("fa-xmark")
  }
}

ScrollReveal().reveal(".skill", {
  beforeReveal: (el) => {
    el.classList.add("animate__animated", "animate__fadeInLeft")
    el.addEventListener(
      "animationend",
      () => {
        el.classList.remove("animate__animated", "animate__fadeInLeft")
      },
      { once: true }
    )
  },
  reset: false,
})

ScrollReveal().reveal(".skillCategoryCard", {
  beforeReveal: (el) => {
    el.classList.add("animate__animated", "animate__fadeInUp")
  },
  reset: false,
})

ScrollReveal().reveal(".eduStatsRow", {
  beforeReveal: (el) => {
    el.classList.add("animate__animated", "animate__fadeInUp")
  },
  reset: false,
})

ScrollReveal().reveal(".eduTimelineItem", {
  beforeReveal: (el) => {
    el.classList.add("animate__animated", "animate__fadeInUp")
  },
  interval: 150,
  reset: false,
})

ScrollReveal().reveal(".textContainer", {
  reset: false,
})

ScrollReveal().reveal(".aboutMeText", {
  beforeReveal: (el) => {
    if (screen.width < 1024) {
      el.classList.add("animate__animated", "animate__fadeInUp")
    } else {
      el.classList.add("animate__animated", "animate__fadeInLeft")
    }

    el.addEventListener(
      "animationend",
      () => {
        if (screen.width < 1024) {
          el.classList.remove("animate__animated", "animate__fadeInUp")
        } else {
          el.classList.remove("animate__animated", "animate__fadeInLeft")
        }
      },
      { once: true }
    )
  },
  reset: false,
})

ScrollReveal().reveal(".logoContainer", {
  beforeReveal: (el) => {
    if (screen.width < 1024) {
      el.classList.add("animate__animated", "animate__fadeInDown")
    } else {
      el.classList.add("animate__animated", "animate__fadeInRight")
    }

    el.addEventListener(
      "animationend",
      () => {
        if (screen.width < 1024) {
          el.classList.remove("animate__animated", "animate__fadeInDown")
        } else {
          el.classList.remove("animate__animated", "animate__fadeInRight")
        }
      },
      { once: true }
    )
  },
  reset: false,
})

ScrollReveal().reveal(".thirdSection .textContainerProjects", {
  beforeReveal: (el) => {
    el.classList.add("animate__animated", "animate__fadeInUp")
  },
  reset: false,
})

ScrollReveal().reveal(".textContainerSocials", {
  beforeReveal: (el) => {
    el.classList.add("animate__animated", "animate__fadeInDown")

    el.addEventListener(
      "animationend",
      () => {
        el.classList.remove("animate__animated", "animate__fadeInDown")
      },
      { once: true }
    )
  },
  reset: false,
})

ScrollReveal().reveal(".social", {
  beforeReveal: (el) => {
    el.classList.add("animate__animated", "animate__fadeInUp")

    el.addEventListener(
      "animationend",
      () => {
        el.classList.remove("animate__animated", "animate__fadeInUp")
      },
      { once: true }
    )
  },
  interval: 100,
  reset: false,
})

// Dynamic ScrollReveal for all project cards with staggered interval
ScrollReveal().reveal(".project", {
  beforeReveal: (el) => {
    el.classList.add("animate__animated", "animate__fadeInUp")

    el.addEventListener(
      "animationend",
      () => {
        el.classList.remove("animate__animated", "animate__fadeInUp")
      },
      { once: true }
    )
  },
  interval: 120,
  reset: false,
})

// Projects Category Filtering Logic
const filterButtons = document.querySelectorAll(".filterTabBtn")
const projectCards = document.querySelectorAll(".project")

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("activeFilter")) return

    const filter = btn.getAttribute("data-filter")

    // Update active tab button style
    filterButtons.forEach((b) => b.classList.remove("activeFilter"))
    btn.classList.add("activeFilter")

    // Instantly filter projects and trigger subtle slide up animation on visible cards
    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category")
      const isMatch = filter === "all" || category === filter

      card.classList.remove("fade-slide-up")

      if (isMatch) {
        card.classList.remove("hideProject")
        void card.offsetWidth // trigger reflow for smooth restart
        card.classList.add("fade-slide-up")
      } else {
        card.classList.add("hideProject")
      }
    })
  })
})

// Skill Slider Logic
const skillTrack = document.getElementById("skillTrack")
const skillSlides = document.querySelectorAll(".skillSlide")
const skillNavDots = document.querySelectorAll(".skillNavDot")
const skillDots = document.querySelectorAll(".skillDot")
const skillPrevBtn = document.getElementById("skillPrevBtn")
const skillNextBtn = document.getElementById("skillNextBtn")
let currentSkillSlide = 0
const totalSkillSlides = skillSlides.length || 3

function goToSkillSlide(index) {
  if (index < 0) index = totalSkillSlides - 1
  if (index >= totalSkillSlides) index = 0

  currentSkillSlide = index
  if (skillTrack) {
    skillTrack.style.transform = `translateX(-${currentSkillSlide * 100}%)`
  }

  skillSlides.forEach((slide, idx) => {
    if (idx === currentSkillSlide) {
      slide.classList.add("activeSlide")
    } else {
      slide.classList.remove("activeSlide")
    }
  })

  skillNavDots.forEach((dot, idx) => {
    if (idx === currentSkillSlide) {
      dot.classList.add("activeSkillNav")
    } else {
      dot.classList.remove("activeSkillNav")
    }
  })

  skillDots.forEach((dot, idx) => {
    if (idx === currentSkillSlide) {
      dot.classList.add("activeSkillDot")
    } else {
      dot.classList.remove("activeSkillDot")
    }
  })
}

// Initialize slide 0 as active on load
goToSkillSlide(0)

if (skillPrevBtn) {
  skillPrevBtn.addEventListener("click", () => goToSkillSlide(currentSkillSlide - 1))
}
if (skillNextBtn) {
  skillNextBtn.addEventListener("click", () => goToSkillSlide(currentSkillSlide + 1))
}

skillNavDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const slideIdx = parseInt(dot.getAttribute("data-slide"))
    goToSkillSlide(slideIdx)
  })
})

skillDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const slideIdx = parseInt(dot.getAttribute("data-slide"))
    goToSkillSlide(slideIdx)
  })
})

// Touch Swipe Support for Skill Slider
let touchStartX = 0
let touchEndX = 0

if (skillTrack) {
  skillTrack.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX
  }, { passive: true })

  skillTrack.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX
    if (touchEndX < touchStartX - 40) {
      goToSkillSlide(currentSkillSlide + 1)
    } else if (touchEndX > touchStartX + 40) {
      goToSkillSlide(currentSkillSlide - 1)
    }
  }, { passive: true })
}
