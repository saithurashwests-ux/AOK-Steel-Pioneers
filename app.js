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

if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("Login Successful:", result.user.displayName);
            })
            .catch((error) => {
                console.error("Login Error Code:", error.code);
                console.error("Login Error Message:", error.message);
                alert("Login failed: " + error.message);
            });
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        signOut(auth).then(() => {
            console.log("Logged out successfully");
        }).catch((error) => {
            console.error("Logout Error:", error);
        });
    });
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        if (loggedOutView) loggedOutView.style.display = "none";
        if (loggedInView) loggedInView.style.display = "block";
        if (userNameSpan) userNameSpan.textContent = user.displayName;
    } else {
        if (loggedOutView) loggedOutView.style.display = "block";
        if (loggedInView) loggedInView.style.display = "none";
        if (userNameSpan) userNameSpan.textContent = "";
    }
});
