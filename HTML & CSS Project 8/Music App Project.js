// Show/Hide Navbar

const transform = document.getElementById('transformation');
const transform2 = document.getElementById('transformation2');
const navbar = document.getElementById('showingNav');
transform.addEventListener('click', function() {
    transform.classList.toggle('change');
    navbar.classList.toggle('sticky');
})


const hideNav = document.getElementById('showHide');
transform2.addEventListener('click', function() {
    transform2.classList.toggle('change2');
    hideNav.classList.toggle('toRight');
})


// Owl Carousel


$('.all-top-song').owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 2000,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })