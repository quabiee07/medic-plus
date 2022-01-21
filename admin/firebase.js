// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";


import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXCJyjWJHFqDG_QLOeh7Q9kfbqMa-m4fk",
    authDomain: "hospital-management-a54d3.firebaseapp.com",
    databaseURL: "https://hospital-management-a54d3-default-rtdb.firebaseio.com",
    projectId: "hospital-management-a54d3",
    storageBucket: "hospital-management-a54d3.appspot.com",
    messagingSenderId: "99199313558",
    appId: "1:99199313558:web:50adf36abcce0088f104b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         const uid = user.uid;
//         // ...
//         console.log(user)
//     } else {
//         // User is signed out
//         // ...
//         console.log(user)

//     }
// });



export const creatingUser = (email, password) => {
    createUserWithEmailAndPassword(auth, "eugenepyo@gmail.com", "password")
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;;
            console.log(errorMessage)
                // ..
        });
}

creatingUser()