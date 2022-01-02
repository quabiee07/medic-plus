const patientDetails = document.querySelector("#patientDetails")

dashDisplay()


const toggle = document.querySelector('.navbar-toggler')
const sideNav = document.querySelector(".side-navigation")
const main = document.querySelector("main")
const close = document.querySelector("#close-btn")

function myFunction(x) {
    if (x.matches) { // If media query matches

        if (sideNav.style.width == "90%") {
            sideNav.style.width = "0px"
            main.style.marginLeft = "0px";


        } else {
            sideNav.style.width = "90%"
            main.style.marginLeft = "90%";
        }
    } else {

        if (sideNav.style.width == "250px") {
            sideNav.style.width = "0px"
            main.style.marginLeft = "0px";


        } else {
            sideNav.style.width = "250px"
            main.style.marginLeft = "250px";
        }
    }
}



toggle.addEventListener('click', e => {

    var x = window.matchMedia("(max-width: 550px)")
    myFunction(x) // Call listener function at run time
        // x.addListener(myFunction)
})


close.addEventListener('click', e => {
    sideNav.style.width = "0px"
    main.style.marginLeft = "0px"
})

sideNav.addEventListener("onblur", e => {
    console.log("hello")
})