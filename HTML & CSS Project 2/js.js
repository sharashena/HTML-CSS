const btn = document.getElementById('bar');
const navShow = document.getElementById('showNav');
const home = document.getElementById('goHome');
const about = document.getElementById('goAbout');
const services = document.getElementById('goServices');
const featured = document.getElementById('goFeatured');
const gallery = document.getElementById('goGallery');

btn.addEventListener('click', () => {
    navShow.classList.toggle('showingNav');
})

home.addEventListener('click', function() {
    navShow.classList.remove('showingNav');
})
about.addEventListener('click', function() {
    navShow.classList.remove('showingNav');
})
services.addEventListener('click', function() {
    navShow.classList.remove('showingNav');
})
featured.addEventListener('click', function() {
    navShow.classList.remove('showingNav');
})
gallery.addEventListener('click', function() {
    navShow.classList.remove('showingNav');
})

// ------------ setting Date ------------

const date = new Date().getFullYear();
const setDating = document.getElementById('date').innerHTML = date;


// ------------- toggle navbar --------------

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 62) {
        navbar.classList.add('fixed');
    } else if (window.pageYOffset < 62) {
        navbar.classList.remove('fixed');
    }
})

// ----------- Smooth Scroll -----------

const scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach(function(link) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const id = e.target.getAttribute('href').slice(1);
            const element = document.getElementById(id);

            let position;
            if (navbar.classList.contains('fixed')) {
                position = element.offsetTop - 62;
            } else {
                position = element.offsetTop - 124;
            }

            if (window.innerWidth < 992) {
                if(navbar.classList.contains('fixed')) {
                    position = element.offsetTop - 62;
                } else {
                    position = element.offsetTop - 334 - 62;
                }
            }
            window.scrollTo({
                left: 0,
                top: position,
                behavior: 'smooth'
            });
    })
})