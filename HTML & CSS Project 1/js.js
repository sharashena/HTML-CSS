const navBtn = document.getElementById('nav-icon');
const navbar = document.getElementById('navbar');
const navClose = document.getElementById('close-btn');

navBtn.addEventListener('click', () => {
    navbar.classList.toggle('showNav');
})
navClose.addEventListener('click', () => {
    navbar.classList.remove('showNav');
})
