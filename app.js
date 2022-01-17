import { closeNav, openNav } from "./patient/patient.js"
const toggle = document.querySelector(".navbar-toggler")
const close = document.querySelector("#close-btn")
const sideNav = document.querySelector(".side-navigation")

function myFunction(x) {
    patientDetails.addEventListener("click", e => {
        sideNav.style.width = "0px"
        patientDetails.style.marginLeft = "0px"


    })

    if (x.matches) { // If media query matches

        if (sideNav.style.width == "90%") {
            closeNav()


        } else {
            sideNav.style.width = "90%"
            patientDetails.style.marginLeft = "90%";
        }
    } else {

        if (sideNav.style.width == "250px") {
            closeNav()


        } else {
            // openNav()

            sideNav.style.width = "250px"
            patientDetails.style.marginLeft = "0px"
        }
    }
}

function myFunction2(x) {


    if (x.matches) {
        closeNav()


    }
}


toggle.addEventListener('click', e => {

    var x = window.matchMedia("(max-width: 550px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction)

    // var y = window.matchMedia("(max-width: 550px)")
    // myFunction2(y)
})




for (let i = 0; i < dashboard.length; i++) {
    dashboard[i].addEventListener("click", e => {
        e.preventDefault()
        var x = window.matchMedia("(max-width: 768px)")
        myFunction2(x)
            // sideNav.style.width = "0px"
            // main.style.marginLeft = "0px"
    })

    bookAppointment[i].addEventListener("click", e => {

        var x = window.matchMedia("(max-width: 768px)")
        myFunction2(x)
            // sideNav.style.width = "0px"
            // main.style.marginLeft = "0px"
    })


    prescription[i].addEventListener("click", e => {
        e.preventDefault()

        var x = window.matchMedia("(max-width: 768px)")
        myFunction2(x)
            // sideNav.style.width = "0px"
            // main.style.marginLeft = "0px"
    })
    appointment[i].addEventListener("click", e => {
        e.preventDefault()

        var x = window.matchMedia("(max-width: 768px)")
        myFunction2(x)
            //  sideNav.style.width = "0px"
            //  main.style.marginLeft = "0px"
    })
}



close.addEventListener('click', e => {
    closeNav()
})