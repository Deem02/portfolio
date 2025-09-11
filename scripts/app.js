


function init() {

const navbarToogle = document.querySelector('.navbar-toggle')
const navbarMenu = document.querySelector('.navbar-menu')

navbarToogle.addEventListener('click', () => {
    navbarToogle.classList.toggle('active')
    navbarMenu.classList.toggle('active')
})


}

document.addEventListener('DOMContentLoaded', init)