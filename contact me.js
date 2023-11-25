function validateForm() {
    // Reset error messages
    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

    // Get form values
    var username = document.getElementById("user_name").value.trim();
    var email = document.getElementById("user_email").value.trim();
    var message = document.getElementById("user_message").value.trim();

    // Validation logic
    var isValid = true;

    if (username === "") {
        document.getElementById("usernameError").innerHTML = "Username is required";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email address";
        isValid = false;
    }

    if (message === "") {
        document.getElementById("messageError").innerHTML = "Message is required";
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    // Basic email validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}