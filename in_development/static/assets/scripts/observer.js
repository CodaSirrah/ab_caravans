const nav = document.querySelector('nav-container')
const sectionOne = document.querySelector('.fill')
const sectionTwo = document.querySelector('#location')
const pseudoNav = document.querySelector('.pseudo-nav ')

const options = {
  rootMargin: '100px 0px -200px 0px',
  threshold: 0.9,
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
}, options)

const sectionThreeObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      resetHr(linkHr)
    }
  })
}, options)

sectionOneObserver.observe(sectionOne)
sectionTwoObserver.observe(sectionTwo)
sectionThreeObserver.observe(pseudoNav)
