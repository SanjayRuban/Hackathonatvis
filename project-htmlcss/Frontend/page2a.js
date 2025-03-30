// Basic login form validation
function validateLogin() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Show success message and redirect
    alert("Login successful!");
    window.location.href = "page3.html";
    return false; // Prevent form from actually submitting
}
