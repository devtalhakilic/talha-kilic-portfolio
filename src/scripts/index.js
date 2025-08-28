let navbar = document.getElementById("navbar");
let firstSection = document.getElementById("firstSection");
let secondSection = document.getElementById("secondSection");
let thirdSection = document.getElementById("thirdSection");
let fourthSection = document.getElementById("fourthSection");
let aboutMeLink = document.getElementById("aboutMeLink");
let skillsLink = document.getElementById("skillsLink");
let projectsLink = document.getElementById("projectsLink");
let socialsLink = document.getElementById("socialsLink");
let hamburgerButton = document.getElementById("hamburgerButton");
let responsiveNavigationBar = document.getElementById(
  "responsiveNavigationBar"
);
let hamburgerIcon = document.getElementById("hamburgerIcon");
let body = document.getElementById("body");
let aboutMeLink1 = document.getElementById("aboutMeLink1");
let skillsLink1 = document.getElementById("skillsLink1");
let projectsLink1 = document.getElementById("projectsLink1");
let socialsLink1 = document.getElementById("socialsLink1");

let typed = new Typed("#skill", {
  strings: ["Junior Front End Developer"],
  typeSpeed: 50, // hız
  backSpeed: 50, // geri silme hızı
  loop: true, // sonsuz döngü
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("non-scrolled");
  }

  if (window.scrollY == 0) {
    navbar.classList.remove("scrolled");
    navbar.classList.add("non-scrolled");
  }

  if (
    window.scrollY >= firstSection.offsetTop &&
    window.scrollY < secondSection.offsetTop
  ) {
    aboutMeLink.style.color = "#07ff39";
    skillsLink.style.color = "white";
    projectsLink.style.color = "white";
    socialsLink.style.color = "white";

    aboutMeLink1.style.color = "#07ff39";
    skillsLink1.style.color = "white";
    projectsLink1.style.color = "white";
    socialsLink1.style.color = "white";
  } else if (
    window.scrollY >= secondSection.offsetTop &&
    window.scrollY < thirdSection.offsetTop
  ) {
    aboutMeLink.style.color = "white";
    skillsLink.style.color = "#07ff39";
    projectsLink.style.color = "white";
    socialsLink.style.color = "white";

    aboutMeLink1.style.color = "white";
    skillsLink1.style.color = "#07ff39";
    projectsLink1.style.color = "white";
    socialsLink1.style.color = "white";
  } else if (
    window.scrollY >= thirdSection.offsetTop &&
    window.scrollY < fourthSection.offsetTop
  ) {
    aboutMeLink.style.color = "white";
    skillsLink.style.color = "white";
    projectsLink.style.color = "#07ff39";
    socialsLink.style.color = "white";

    aboutMeLink1.style.color = "white";
    skillsLink1.style.color = "white";
    projectsLink1.style.color = "#07ff39";
    socialsLink1.style.color = "white";
  } else if (window.scrollY >= fourthSection.offsetTop) {
    aboutMeLink.style.color = "white";
    skillsLink.style.color = "white";
    projectsLink.style.color = "white";
    socialsLink.style.color = "#07ff39";

    aboutMeLink1.style.color = "white";
    skillsLink1.style.color = "white";
    projectsLink1.style.color = "white";
    socialsLink1.style.color = "#07ff39";
  }
});

function hamburgerMenu(){
    console.log("TIKLANDI");
    if (responsiveNavigationBar.classList.contains("hiddenNav")) {
      body.style.overflow = "hidden";
      responsiveNavigationBar.classList.remove("hiddenNav");
      responsiveNavigationBar.classList.add("animate__fadeIn");
      responsiveNavigationBar.classList.remove("animate__fadeOut");
      hamburgerIcon.classList.remove("fa-bars");
      hamburgerIcon.classList.add("fa-xmark");
    } else if (
      responsiveNavigationBar.classList.contains("hiddenNav") == false
    ) {
      body.style.overflow = "scroll";
      responsiveNavigationBar.classList.remove("animate__fadeIn");
      responsiveNavigationBar.classList.add("animate__fadeOut");
      setTimeout(() => {
        responsiveNavigationBar.classList.add("hiddenNav");
      }, 400);
      hamburgerIcon.classList.add("fa-bars");
      hamburgerIcon.classList.remove("fa-xmark");
    }
}