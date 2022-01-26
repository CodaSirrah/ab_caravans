// Selectors
const nav = document.querySelector('nav-container')
const sectionOne = document.querySelector('.fill')
const sectionTwo = document.querySelector('#location')
const sectionThree = document.querySelector('#footer')
const pseudoNav = document.querySelector('.pseudo-nav ')
const linkHr = document.querySelector('.link-hr')

// Global Objects {
const linkDistance = 110
const options = {
  rootMargin: '100px 0px -200px 0px',
  threshold: 0.9,
}

const optionsLocation = {
  rootMargin: '-50px 0px -200px 0px',
  threshold: 0.9,
}

// const optionsFooter - {
//   r
// }

// Global Functions
function translateHr(target, multiplier) {
  target.style = `transform: translateX(${(linkDistance * multiplier).toString()}px);`
}

function resetHr(target) {
  target.style = `transform: translateX(0px);`
}
const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      translateHr(linkHr, 1)
    }
  })
}, options)
const sectionTwoObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      translateHr(linkHr, 2)
    }
  })
}, optionsLocation)

const sectionThreeObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      translateHr(linkHr, 3)
    }
  })
}, options)

const sectionFourObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      resetHr(linkHr)
    }
  })
}, options)

// Firing Functions
sectionOneObserver.observe(sectionOne)
sectionTwoObserver.observe(sectionTwo)
sectionThreeObserver.observe(sectionThree)
sectionFourObserver.observe(pseudoNav)
