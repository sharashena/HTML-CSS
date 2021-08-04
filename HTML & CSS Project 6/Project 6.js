// Navbar

const showNavbar = document.getElementById('showNav');
const arrowBtn = document.querySelector('.nav-logo i');

arrowBtn.addEventListener('click', () => {
    showNavbar.classList.toggle('showingNav');
})


// Sticky After Scrolling


const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 69) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
})


// Smooth Scroll


const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showNavbar.classList.remove('showingNav');

        const id = e.target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        
        let position;
        if (navbar.classList.contains('sticky')) {
            position = element.offsetTop - 69;
        } else {
            position = element.offsetTop - 69;
        }


        if (window.innerWidth > 776) {
            if (navbar.classList.contains('sticky')) {
                if(navbar.classList.contains('sticky')) {
                    position = element.offsetTop - 69;
                } else {
                    position = element.offsetTop - 138 - 69
                }
            }
        }

        window.scrollTo({
            left: 0,
            top: position,
            behavior: 'smooth'
        })
    })
})


// Progress Bar

$("#p-bar-1").progressbar({
    value: 37
  });
  $("#p-bar-2").progressbar({
    value: 70
  });
  $("#p-bar-3").progressbar({
    value: 60
  });
  $("#p-bar-4").progressbar({
    value: 80
  });

//   Owl-carousel


$('.owl-carousel').owlCarousel({
    loop: true,
    smartSpeed: 2000,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
  $(".owl-prev").html('<div><i class="fa fa-chevron-left"></i></div>');
  $(".owl-next").html('<div><i class="fa fa-chevron-right"></i></div>');
