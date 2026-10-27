import { auth } from "./firebase-config.js";
import { 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

const loginBtn = document.getElementById("google-login-btn");
const logoutBtn = document.getElementById("logout-btn");
const loggedOutView = document.getElementById("logged-out-view");
const loggedInView = document.getElementById("logged-in-view");
const userNameSpan = document.getElementById("user-name");

// Google Login (Popup နည်းလမ်းဖြင့် ဝင်ရန်)
loginBtn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("Logged in user:", result.user.displayName);
        })
        .catch((error) => {
            console.error("Login Error:", error);
            alert("Login failed: " + error.message);
        });
});

// Logout လုပ်ရန်
logoutBtn.addEventListener("click", () => {
    signOut(auth).then(() => {
        console.log("Logged out successfully");
    }).catch((error) => {
        console.error("Logout Error:", error);
    });
});

// အကောင့်ဝင်/ထွက် အခြေအနေကို စောင့်ကြည့်ရန်
onAuthStateChanged(auth, (user) => {
    if (user) {
        loggedOutView.style.display = "none";
        loggedInView.style.display = "block";
        userNameSpan.textContent = user.displayName;
    } else {
        loggedOutView.style.display = "block";
        loggedInView.style.display = "none";
        userNameSpan.textContent = "";
    }
});
