import { auth } from "./firebase-config.js";
import { 
    GoogleAuthProvider, 
    signInWithRedirect, 
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
        signInWithRedirect(auth, provider);
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        signOut(auth);
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
