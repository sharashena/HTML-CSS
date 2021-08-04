const date = document.getElementById('date').innerHTML = new Date().getFullYear();

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 89.6) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed')
    }
})


// Smooth Scroll

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const id = e.target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        let position;

        if(navbar.classList.contains('fixed')) {
            position = element.offsetTop - 89.6;
        } else {
            position = element.offsetTop - 179.2;
        }

        if (window.innerWidth < 576) {
            if(navbar.classList.contains('fixed')) {
                position = element.offsetTop - 379.6;
            } else {
                position = element.offsetTop - 379.6 - 379.6;
            }
        }

        window.scrollTo({
            left: 0,
            top: position,
            behavior: 'smooth'
        })
    })
})