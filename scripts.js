// Hamburger menu animations
const click = document.querySelector('.hamburger-menu')
const navContainer = document.querySelector('.navigation-container')
const arrow = document.querySelector('.arrow')
const body = document.querySelector('body')
const header = document.querySelector('header')
const clickItems = document.getElementsByClassName('table-of-content')

window.addEventListener('resize', () => {
  if (window.innerWidth < 1025) {
    click.addEventListener('click', () => {
      click.classList.toggle('open-menu')
      navContainer.classList.toggle('menu-is-open')
      body.classList.toggle('noscroll')
      header.classList.toggle('header-static')
      console.log('toggled')
    })
    Array.from(clickItems).forEach((element) => {
      element.addEventListener('click', () => {
        click.classList.toggle('open-menu')
        navContainer.classList.toggle('menu-is-open')
        body.classList.toggle('noscroll')
        header.classList.toggle('header-static')
      })
    })
  } else {
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
