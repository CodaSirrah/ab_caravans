// navSelectors
const homeLink = document.querySelector('#home')
const servicesLink = document.querySelector('#services')
const locationLink = document.querySelector('#location')

//navHrSelectors
const linkHr = document.querySelector('.link-hr')

// callUsSelectors
const callUs = document.querySelector('.call-us')

// globalObjects {
const linkDistance = 110

function animateNav(e) {
  if (e.target.classList.contains('navLink') === false) {
    return
  } else {
    let name = e.target.classList[1]
    console.log(name)
    switch (e.target.classList.contains(name)) {
      case name === 'linkStart':
        if (linkHr.classList.contains('hr-mid')) {
          resetHr(linkHr)
          linkHr.classList.remove('hr-mid')
          linkHr.classList.add('hr-start')
        } else if (linkHr.classList.contains('hr-end')) {
          resetHr(linkHr)
          linkHr.classList.remove('hr-end')
          linkHr.classList.add('hr-start')
        }
        break
      case name === 'linkMid':
        if (linkHr.classList.contains('hr-start')) {
          translateHr(linkHr, 1)
          linkHr.classList.remove('hr-start')
          linkHr.classList.add('hr-mid')
        } else if (linkHr.classList.contains('hr-end')) {
          translateHr(linkHr, 1)
          linkHr.classList.remove('hr-end')
          linkHr.classList.add('hr-mid')
        }
        break
      case name === 'linkEnd':
        if (linkHr.classList.contains('hr-start')) {
          translateHr(linkHr, 2)
          linkHr.classList.remove('hr-start')
          linkHr.classList.add('hr-end')
        } else if (linkHr.classList.contains('hr-mid')) {
          translateHr(linkHr, 2)
          linkHr.classList.remove('hr-mid')
          linkHr.classList.add('hr-end')
        }
        break
      default:
        consolelog("I guess this didn't work out")
    }
  }
}

function translateHr(target, multiplier) {
  target.style = `transform: translateX(${(linkDistance * multiplier).toString()}px);`
}

function resetHr(target) {
  target.style = `transform: translateX(0px);`
}

document.addEventListener('click', animateNav)
