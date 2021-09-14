//Scroll to top button
// Get the button

var theButton = document.getElementById('myButton')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
  stickyNav()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    theButton.style.display = 'block'
  } else {
    theButton.style.display = 'none'
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

//Sticky nav bar
const nav = document.querySelector('.nav-menu')

const initialPos = nav.offsetTop

console.log(initialPos)

const stickyNav = () => {
  window.pageYOffset >= initialPos
    ? nav.classList.add('sticky')
    : nav.classList.remove('sticky')
}
