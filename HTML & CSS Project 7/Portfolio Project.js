// Nav hide/show

const iconBtn = document.querySelector('.nav-btn')
const navbarShow = document.getElementById('showNav');

iconBtn.addEventListener('click', function() {
    navbarShow.classList.toggle('appear');
})