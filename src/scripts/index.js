let navbar = document.getElementById("navbar")
let firstSection = document.getElementById("firstSection")
let secondSection = document.getElementById("secondSection")
let thirdSection = document.getElementById("thirdSection")
let fourthSection = document.getElementById("fourthSection")
let aboutMeLink = document.getElementById("aboutMeLink")
let skillsLink = document.getElementById("skillsLink")
let projectsLink = document.getElementById("projectsLink")
let socialsLink = document.getElementById("socialsLink")

let typed = new Typed("#skill", {
  strings: ["Junior Front End Developer"],
  typeSpeed: 50, // hız
  backSpeed: 50, // geri silme hızı
  loop: true     // sonsuz döngü
});
console.log(secondSection)
console.log(thirdSection)
console.log(fourthSection)


window.addEventListener("scroll", () => {
    if(window.scrollY > 0){
        navbar.classList.add("scrolled")
        navbar.classList.remove("non-scrolled")
    }

    if(window.scrollY == 0){
        navbar.classList.remove("scrolled")
        navbar.classList.add("non-scrolled")
    }

    if(window.scrollY >= firstSection.offsetTop && window.scrollY < secondSection.offsetTop){
        aboutMeLink.style.color = "#07ff39";
        skillsLink.style.color = "white";
        projectsLink.style.color = "white";
        socialsLink.style.color = "white";
    }

    else if(window.scrollY >= secondSection.offsetTop && window.scrollY < thirdSection.offsetTop){
        aboutMeLink.style.color = "white";
        skillsLink.style.color = "#07ff39";
        projectsLink.style.color = "white";
        socialsLink.style.color = "white";
    }

    else if(window.scrollY >= thirdSection.offsetTop && window.scrollY < fourthSection.offsetTop){
        aboutMeLink.style.color = "white";
        skillsLink.style.color = "white";
        projectsLink.style.color = "#07ff39";
        socialsLink.style.color = "white";
    }

    else if(window.scrollY >= fourthSection.offsetTop){
        aboutMeLink.style.color = "white";
        skillsLink.style.color = "white";
        projectsLink.style.color = "white";
        socialsLink.style.color = "#07ff39";
    }

})