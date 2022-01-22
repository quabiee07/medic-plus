import { signInUser } from "../admin/firebase.js"
const form = document.querySelector("form")

form.addEventListener("submit", e => {
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    e.preventDefault()
    email && password ? signInUser(email, password, "/patient/patient.html") : swal({ title: "Blank fields", icon: "error", text: "fill blank fields" })

    // errHandler(email, password, "/patient/patient.html")
})