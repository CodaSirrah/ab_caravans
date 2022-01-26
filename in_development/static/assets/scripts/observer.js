// Selectors
const nav = document.querySelector('nav-container')
const homeSection = document.querySelector('.pseudo-nav')
const servicesSection = document.querySelector('.fill')
const locationSection = document.querySelector('.pseudo-location')
const footerSection = document.querySelector('#footer')
const linkHr = document.querySelector('.link-hr')

// Global Objects {
const linkDistance = 110

const optionsHome = {
  rootMargin: '100px 0px -200px 0px',
  threshold: 0.9,
}

const optionsServices = {
  rootMargin: '100px 0px -200px 0px',
  threshold: 0.9,
}

const optionsLocation = {
  rootMargin: '0px 0px -200px 0px',
  threshold: 1,
}

const optionsFooter = {
  rootMargin: '0px 0px -10px 0px',
  threshold: 0.2,
}

// Global Functions
function translateHr(target, multiplier) {
  target.style = `transform: translateX(${(linkDistance * multiplier).toString()}px);`
}

function resetHr(target) {
  target.style = `transform: translateX(0px);`
}
const homeSectionObserver = new IntersectionObserver(function (entries, homeSectionObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      resetHr(linkHr)
    }
  })
}, optionsHome)

const servicesSectionObserver = new IntersectionObserver(function (entries, servicesSectionObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      translateHr(linkHr, 1)
    }
  })
}, optionsServices)

const locationSectionObserver = new IntersectionObserver(function (entries, locationSectionObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      translateHr(linkHr, 2)
    }
  })
}, optionsLocation)

const footerSectionObserver = new IntersectionObserver(function (entries, footerSectionObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      translateHr(linkHr, 3)
    }
  })
}, optionsFooter)

// Firing Functions
homeSectionObserver.observe(homeSection)
servicesSectionObserver.observe(servicesSection)
locationSectionObserver.observe(locationSection)
footerSectionObserver.observe(footerSection)
