const menuIcon = document.querySelector('.hamburguer-menu');
const navbar = document.querySelector('.navbar');
const greyScreen = document.querySelector('.grey');
const menuIconContainer = document.querySelector('.h-menu-container');
const yellowBar = document.querySelector('.yellow-bar');
const banner = document.querySelector('banner-container');

menuIcon.addEventListener ('click', () => {
    navbar.classList.toggle("nav-appear");
    greyScreen.classList.toggle("grey-screen");
    menuIcon.classList.toggle("change");
    menuIconContainer.classList.toggle("positionChange");
})


greyScreen.addEventListener ('click', (event) => {
    if (event.target == greyScreen && greyScreen.classList.contains("grey-screen")) {
        greyScreen.classList.toggle("grey-screen");
        navbar.classList.toggle("nav-appear");
        menuIcon.classList.toggle("change");
        menuIconContainer.classList.toggle("positionChange");
    }
})