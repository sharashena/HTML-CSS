$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    smartSpeed: 1000,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
$('.all-customer').owlCarousel({
    loop:true,
    margin:10,
    smartSpeed: 1000,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

$('#hamburger').click(function(){
    // $('.navbar__container').toggleClass('appear');
    $('#hamburger').toggleClass('transform');
    $('.navbar__container').slideToggle(2000);
})

// Effect After Scrolling


const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 72.8) {
        navbar.classList.add('styles');
    } else {
        navbar.classList.remove('styles')
    }
})

// Smooth Scroll

$('.navbar__container a').click(function (link) {
    link.preventDefault();

    let target = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 1000);

  })