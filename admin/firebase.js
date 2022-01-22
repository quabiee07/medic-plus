// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getDatabase, ref, set, child, update, remove, get, onValue } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";
// import { firebase } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";


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


// authentication
export const creatingUser = (email, password, name, contact, gender, username) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user)
            patientsProfile(email, password, name, contact, gender, username, user.uid)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;;
            console.log(errorMessage)
                // ..
        });
}


// storing all patient details
const patientsProfile = (email, password, name, contact, gender, username, userID) => {
    set(ref(db, 'patients' + userID), {
            email,
            password,
            name,
            contact,
            gender,
            username,
            userID
        }).then(() => alert("data saved"))
        .catch(e => {
            console.log(e.message)
        })
}

// getting all patient details
const db = getDatabase()
const getPatientDetails = () => {
    const dbRef = ref(db);
    get(child(dbRef, `patients`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}