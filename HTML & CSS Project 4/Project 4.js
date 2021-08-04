// ************** Show-Hide Navbar ******************

const hamburger = document.getElementById('hamburger');
const container = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    container.classList.toggle('showNav');
    hamburger.classList.toggle('turn');
})

// ****************** Fixed Navbar After Scrolling ******************

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 79) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
})

//  **************** Smooth Scroll ****************

const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        container.classList.remove('showNav');
        hamburger.classList.remove('turn');

        const id = e.target.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        let position;

        if (navbar.classList.contains('fixed')) {
            position = element.offsetTop - 79;
        } else {
            position = element.offsetTop - 158;
        }

        if (window.innerWidth > 776) {
            if (navbar.classList.contains('fixed')) {
                position = element.offsetTop - 79;
            } else {
                position = element.offsetTop - 158 - 79;
            }
        } 

        window.scrollTo({
            left: 0,
            top: position,
            behavior: 'smooth'
        })
    })
})