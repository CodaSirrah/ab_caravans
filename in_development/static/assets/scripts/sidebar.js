const sidebar = document.querySelector('.mobile-menu')
const sidebarLinks = document.querySelectorAll('.mobile-link')
const menuContainer = document.querySelector('#hamburger-menu')

const hamburgerModule = (() => {
  let state = 'closed'

  const animation = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.querySelector('#hamburger-menu'), // required
    path: 'in_development/static/assets/animations/hamburger.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: 'hamburger-animation', // optional
  })
  animation.goToAndStop(0, true)
  animation.setSpeed(2.6)

  const toggleMobileMenu = () => {
    sidebar.classList.toggle('open')
  }

  const animateMenu = () => {
    if (state === 'open') {
      animation.playSegments([38, 75], true)
      state = 'closed'
      toggleMobileMenu()
    } else {
      animation.playSegments([0, 37], true)
      state = 'open'
      toggleMobileMenu()
    }
  }
  menuContainer.addEventListener('click', animateMenu)
  sidebarLinks.forEach((link) => {
    link.addEventListener('click', animateMenu, { passive: true })
  })
})()
