function toggleMode() {
    const body = document.querySelector('body')
    let githubIcon = document.querySelector('.github-icon img')
    const bodyDark = body.classList.contains('dark')
    body.classList.toggle('dark')
    
    if(bodyDark === false) {
        githubIcon.setAttribute('src', './assets/icons/icons8-github-white.svg')
    } else {
        githubIcon.setAttribute('src', './assets/icons/icons8-github.svg')
    }
}

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault()
    const nav = document.querySelector('nav ul')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

function closeMenu() {
    btnMobile.click()
}

const caretdown = document.querySelector('#presentation i.ph-caret-down')
const about = document.querySelector('.nav-wrapper ul li a[href="#about"]')

caretdown.addEventListener('click', () => {
    about.click()
    btnMobile.click()
})