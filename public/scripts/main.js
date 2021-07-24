// document.getElementById("projects-link").addEventListener("click", function () {})

// document.getElementById("about-link").addEventListener("click", function () {})

// document.getElementById("contact-link").addEventListener("click", function () {})

window.addEventListener('scroll', (event) => {
    activeSectionUpdater()
})

function activeSectionUpdater() {

    let newActive = ''
    let elems = []

    elems.push(document.getElementById("about"))
    elems.push(document.getElementById("projects"))
    elems.push(document.getElementById("contact"))

    elems.forEach(element => {
        const rect = element.getBoundingClientRect()

        if (element.id === "contact") {
            if (rect['y'] <= window.innerHeight / 2) {
                newActive = element.id
            }
        } else {
            if (rect['y'] <= 30) {
                newActive = element.id
            }
        }


    });

    changeActive(newActive + '-link')
}

function changeActive(id) {
    let elementList = ["projects-link", "about-link", "contact-link"]

    elementList.forEach(element => {
        document.getElementById(element).style.setProperty("--after-height", "0px")
    });

    document.getElementById(id).style.setProperty('--after-height', '4px')
}