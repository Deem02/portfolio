
function init() {

    // https://youtu.be/Og-YEeCTE7A?si=Oeatz5G8KOPQ_fwD
    const navbarToogle = document.querySelector('.navbar-toggle')
    const navbarMenu = document.querySelector('.navbar-menu')

    const navLinks = document.querySelectorAll('.navbar-menu a')
const sections = document.querySelectorAll('section')
    navbarToogle.addEventListener('click', () => {
        navbarToogle.classList.toggle('active') // It adds the class active to the button if it's not there,
        // and removes it if it is. it triggers  CSS to animate the button into an "X".
        navbarMenu.classList.toggle('active') //triggers CSS to show or hide the menu on small screens.
    })

    // colse mobile menue 
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarMenu.classList.contains('active')) {
                navbarToogle.classList.remove('active')
                navbarMenu.classList.remove('active')
            }
        })
    })
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

    // Step 1: Define the options for the observer
       const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5 // trigger when 50% of the section is visible
            }
 // Step 2: Create the observer, passing it the NAME of the callback function
            const observer = new IntersectionObserver(handleIntersection, observerOptions)
              // Step 3: Define the callback function that the observer will execute
   function handleIntersection(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Remove active class from all links
                        navLinks.forEach(link => link.classList.remove('active'))

                        // Add active class to the correct link
                        const id = entry.target.getAttribute('id')
                        const matchingLink = document.querySelector(`.navbar-menu a[href="#${id}"]`)
                        if (matchingLink) {
                            matchingLink.classList.add('active')
                        }
                    }
                })
            }

            // Step 4: Tell the observer to watch each of the sections
            sections.forEach(section => {
                observer.observe(section)
            })

}

//  This is the first thing that runs. It tells the browser, Wait 
// until the entire HTML page is loaded, then run the init function
document.addEventListener('DOMContentLoaded', init)