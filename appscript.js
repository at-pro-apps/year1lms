// Import the necessary functions from Firebase Authentication SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDT_93Ius9qmWSSFxIlAZ9pcRnbVCji7G0",
    authDomain: "portsaid-c80cd.firebaseapp.com",
    databaseURL: "https://portsaid-c80cd-default-rtdb.firebaseio.com",
    projectId: "portsaid-c80cd",
    storageBucket: "portsaid-c80cd.appspot.com",
    messagingSenderId: "263720618753",
    appId: "1:263720618753:web:37e6f2e428ced7dfb7e900",
    measurementId: "G-2LS5JZPCM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check if user is logged in on page load
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        console.log("User is logged in:", user.email);
    } else {
        // No user is signed in, redirect to login
        alert("You must be logged in to access this page.");
        window.location.href = "app.html"; // Redirect to login page
    }
});

// Function to handle login
function handleLogin() {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Firebase login with email and password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Play success sound
            const successSound = new Audio('notification-interface-success-positive-corrects-132471.mp3');
            successSound.play();

            // Hide login form and related elements
            document.querySelector('.login-content').style.display = 'none';
            document.querySelector('.login-form').style.display = 'none';

            // Show cards smoothly
            showCards();
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("Login failed: " + errorMessage);
        });
}

// Function to create and display cards
function showCards() {
    const cardImages = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"];
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";

    cardImages.forEach((imgSrc, index) => {
        const card = document.createElement("div");
        card.className = "card";
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Card " + (index + 1);
        card.appendChild(img);
        card.onclick = function() {
            // Redirect to subject.html only if user is logged in
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    window.location.href = "subject.html";
                } else {
                    alert("You must be logged in to access this page.");
                }
            });
        };
        cardContainer.appendChild(card);
    });

    // Append card container to body and scroll smoothly
    document.body.appendChild(cardContainer);
    cardContainer.scrollIntoView({ behavior: "smooth" });
}
