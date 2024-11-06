// login.js
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Example hardcoded credentials
    if (username === "user" && password === "pass123") {
        window.location.href = 'content.html'; // Redirect to the content page
    } else {
        alert('Invalid credentials, please try again.');
    }
}
