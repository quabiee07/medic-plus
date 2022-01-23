import { signInUser } from "../admin/firebase.js"
const form = document.querySelector("form")

form.addEventListener("submit", e => {
    e.preventDefault()

    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    console.log(email)
    email && password ? signInUser(email, password, "../admin/admin.html") : swal({ title: "Blank fields", icon: "error", text: "fill blank fields" })

    // errHandler(email, password, "/patient/patient.html")
})