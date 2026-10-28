document.addEventListener("DOMContentLoaded", () => {
    const loggedOutView = document.getElementById("logged-out-view");
    const loggedInView = document.getElementById("logged-in-view");
    const userNameSpan = document.getElementById("user-name");

    // Login မလိုဘဲ Dashboard ကို တန်းပြရန်
    if (loggedOutView) loggedOutView.style.display = "none";
    if (loggedInView) loggedInView.style.display = "block";
    if (userNameSpan) userNameSpan.textContent = "Admin (Test User)";
});
