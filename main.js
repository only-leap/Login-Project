
// Show and hide password
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        this.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        password.type = "password";
        this.classList.replace("fa-eye-slash", "fa-eye");
    }
});

// Login validation
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const passwordValue = password.value;

    if (email === "" || passwordValue === "") {
        message.style.color = "red";
        message.textContent = "Please fill in all fields.";
        return;
    }

    if (passwordValue.length < 6) {
        message.style.color = "red";
        message.textContent = "Password must be at least 6 characters.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Login form validated successfully!";
});

// Forgot password
document.getElementById("forgotPassword")
    .addEventListener("click", function (event) {
        event.preventDefault();
        alert("Please contact the administrator to reset your password.");
    });
