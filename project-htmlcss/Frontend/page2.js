function validateRegistration() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username.length < 3) {
        alert("Username must be at least 3 characters long.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // Show success message and redirect
    alert("Registration successful!");
    window.location.href = "page3.html";
    return false; // Prevent form from actually submitting
}
