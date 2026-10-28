import { auth } from "./firebase-config.js";
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const logoutBtn = document.getElementById("logout-btn");

const loggedOutView = document.getElementById("logged-out-view");
const loggedInView = document.getElementById("logged-in-view");
const userNameSpan = document.getElementById("user-name");

// Login ဝင်ရန်
if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        if(!email || !password) {
            alert("ကျေးဇူးပြု၍ Email နှင့် Password ထည့်ပါ။");
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Logged in:", userCredential.user);
            })
            .catch((error) => {
                alert("Login Error: " + error.message);
            });
    });
}

// အကောင့်အသစ်လုပ်ရန် (Sign Up)
if (signupBtn) {
    signupBtn.addEventListener("click", () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        if(!email || !password) {
            alert("ကျေးဇူးပြု၍ Email နှင့် Password ထည့်ပါ။");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("အကောင့်ဖွင့်ခြင်း အောင်မြင်ပါသည်။");
            })
            .catch((error) => {
                alert("Sign up Error: " + error.message);
            });
    });
}

// Log out ထွက်ရန်
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        signOut(auth);
    });
}

// အကောင့်ဝင်/ထွက် အခြေအနေကို စောင့်ကြည့်ရန်
onAuthStateChanged(auth, (user) => {
    if (user) {
        if (loggedOutView) loggedOutView.style.display = "none";
        if (loggedInView) loggedInView.style.display = "block";
        if (userNameSpan) userNameSpan.textContent = user.email;
    } else {
        if (loggedOutView) loggedOutView.style.display = "block";
        if (loggedInView) loggedInView.style.display = "none";
        if (userNameSpan) userNameSpan.textContent = "";
    }
});
