// Import the necessary functions from Firebase Authentication SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHC7BiKbu7hFMfhInlIziHPAelNenjdMg",
    authDomain: "shield-a35b5.firebaseapp.com",
    projectId: "shield-a35b5",
    storageBucket: "shield-a35b5.appspot.com",
    messagingSenderId: "123110624345",
    appId: "1:123110624345:web:6fd56c57489e0a713bb548",
    measurementId: "G-2XV662RNRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to register a new user
function registerUser() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Successful account creation
        alert("Account created successfully!");
        const user = userCredential.user;
        console.log('User: ', user);
    })
    .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
    });
}
