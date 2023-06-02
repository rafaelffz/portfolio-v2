function toggleMode() {
    const body = document.querySelector('body')
    let githubIcon = document.querySelector('.github-icon img')
    const bodyDark = body.classList.contains('dark')
    body.classList.toggle('dark')
    
    if(bodyDark === false) {
        githubIcon.setAttribute('src', '/app/assets/icons/icons8-github-white.svg')
    } else {
        githubIcon.setAttribute('src', '/app/assets/icons/icons8-github.svg')
    }
}