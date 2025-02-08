// script.js
document.addEventListener("DOMContentLoaded", function () {
    const applyButton = document.getElementById("applyButton");
    const popupForm = document.getElementById("popupForm");
    const closeButton = document.getElementById("closeButton");
    const applicationForm = document.getElementById("applicationForm");
    const firstNameInput = document.getElementById("firstName");
    const mobileInput = document.getElementById("mobile");
    const emailInput = document.getElementById("email");
    const firstNameError = document.getElementById("firstNameError");
    const mobileError = document.getElementById("mobileError");
    const emailError = document.getElementById("emailError");

    // Show popup when Apply button is clicked
    applyButton.addEventListener("click", function () {
        popupForm.style.display = "flex";
    });

    // Close popup when close button is clicked
    closeButton.addEventListener("click", function () {
        popupForm.style.display = "none";
    });

    // Close popup when clicking outside the form
    window.addEventListener("click", function (event) {
        if (event.target === popupForm) {
            popupForm.style.display = "none";
        }
    });

    // Form validation on submit
    applicationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let isValid = true;

        // Validate First Name
        if (firstNameInput.value.trim() === "") {
            firstNameError.textContent = "Insert a valid name";
            firstNameError.style.display = "block";
            firstNameInput.focus();
            isValid = false;
        } else {
            firstNameError.style.display = "none";
        }

        // Validate Mobile (10 digits)
        const mobilePattern = /^\d{10}$/;
        if (!mobilePattern.test(mobileInput.value.trim())) {
            mobileError.textContent = "Insert a valid mobile number";
            mobileError.style.display = "block";
            mobileInput.focus();
            isValid = false;
        } else {
            mobileError.style.display = "none";
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Insert a valid email";
            emailError.style.display = "block";
            emailInput.focus();
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        // If all fields are valid, submit the form
        if (isValid) {
            alert("Form submitted successfully!");
            popupForm.style.display = "none"; // Close the popup
            applicationForm.reset(); // Reset the form
        }
    });
});