const hamburger =document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const headerHamburger = document.querySelector("#headerToggle");
const logoHamburger = document.querySelector("#logoMenu");

const scroll = document.querySelector("body");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    headerHamburger.classList.toggle("active");
    logoHamburger.classList.toggle("active");

    var audio = new Audio('./sounds/kick-bass.mp3');
    audio.play();

    scroll.classList.toggle("scrollTogle");

})

// document.addEventListener("click", (e) => {
//     if(e.target.id !== 'nav-menu' && e.target.id !== 'hamburger'){
//         hamburger.classList.remove("active");
//         navMenu.classList.remove("active");
//         headerHamburger.classList.remove("active");
//         logoHamburger.classList.remove("active");
//     }
// })

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    headerHamburger.classList.remove("active");
    logoHamburger.classList.remove("active");

    scroll.classList.remove("scrollTogle");

}))


document.querySelectorAll(".nav-list a")[4].classList.add("bg-primary");
// document.querySelectorAll(".nav-list a")[4].style.color = "red";

