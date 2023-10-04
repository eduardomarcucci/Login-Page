var passwordField = document.querySelector('input[type="password"]');
var showPasswordCheckbox = document.getElementById("show-password");

showPasswordCheckbox.addEventListener("change", function () {
    if (showPasswordCheckbox.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});