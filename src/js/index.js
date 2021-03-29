import '../scss/index.scss'
import '../index.html'

import '../css/owl.carousel.css'
import '../js/object/owl.carousel.js'

$(document).ready(function () {
  $('.banner_silder').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  })
})
