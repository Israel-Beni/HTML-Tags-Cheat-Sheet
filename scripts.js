// Hamburger menu animations
const click = document.querySelector('.hamburger-menu')
const navContainer = document.querySelector('.navigation-container')
// const arrow = document.querySelector('.arrow')
const body = document.querySelector('body')
const header = document.querySelector('header')
const clickItems = document.getElementsByClassName('table-of-content')

const setUpListeners = () => {
  click.addEventListener('click', () => {
    click.classList.toggle('open-menu')
    navContainer.classList.toggle('menu-is-open')
    body.classList.toggle('noscroll')
    header.classList.toggle('header-static')
  })
  Array.from(clickItems).forEach((element) => {
    element.addEventListener('click', () => {
      click.classList.toggle('open-menu')
      navContainer.classList.toggle('menu-is-open')
      body.classList.toggle('noscroll')
      header.classList.toggle('header-static')
    })
  })
}

window.addEventListener('resize', () => {
  if (window.innerWidth < 1025 || window.innerHeight < 670) {
    setUpListeners()
  } else if (window.innerWidth > 1025) {
    click.addEventListener('click', () => {
      return
    })
    Array.from(clickItems).forEach((element) => {
      element.addEventListener('click', () => {
        return
      })
    })
  }
})

window.onload = () => {
  window.innerWidth < 1025 ? setUpListeners() : null
}
