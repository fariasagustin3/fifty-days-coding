const panels = document.querySelectorAll('.panel')

// change picture when user click on other one
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        // remove "active" class name from HTML
        removeActiveClasses()
        panel.classList.add('active')
    })
})

// remove active class when user click on other picture
const removeActiveClasses = () => {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}
