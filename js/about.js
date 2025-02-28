// script.js
document.addEventListener("DOMContentLoaded", function () {
    const applyButton = document.getElementById("applyButton");
    const applyButton1 = document.getElementById("applyButton1")
    const applyButton2 = document.getElementById("applyButton2")
    const popupForm = document.getElementById("popupForm");
    const closeButton = document.getElementById("closeButton1");
    const applicationForm = document.getElementById("applicationForm");
    const fullNameInput = document.getElementById("fullName");
    const mobileInput = document.getElementById("mobile");
    const emailInput = document.getElementById("email");
    const fullNameError = document.getElementById("fullNameError");
    const mobileError = document.getElementById("mobileError");
    const emailError = document.getElementById("emailError");
    const menuButton = document.getElementById("menuButton");
    const sideMenu = document.getElementById("sideMenu");
    const mobileMenuButton = document.getElementById("menuButton1");
    const sideCloseButton = document.getElementById("sideCloseButton");


    // Show popup when Apply button is clicked
    applyButton.addEventListener("click", function () {
        popupForm.style.display = "flex";
    });

    applyButton1.addEventListener("click", function() {
        popupForm.style.display = "flex";
    });

    applyButton2.addEventListener("click", function() {
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

    function toggleMenu() {
        if (sideMenu.style.left === "-300px") {
            sideMenu.style.left = "0";
        } else {
            sideMenu.style.left = "-300px";
        }
    }

    menuButton.addEventListener("click", toggleMenu);
    mobileMenuButton.addEventListener("click", toggleMenu);

    window.addEventListener("click", function (event) {
        if (
            event.target !== menuButton &&
            event.target !== mobileMenuButton &&
            !sideMenu.contains(event.target)
        ) {
            sideMenu.style.left = "-300px";
        }
    });

    sideCloseButton.addEventListener("click", toggleMenu);

    // Form validation on submit
    applicationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let isValid = true;

        // Validate Full Name
        if (fullNameInput.value.trim() === "") {
            fullNameError.textContent = "Insert a valid name";
            fullNameError.style.display = "block";
            fullNameInput.focus();
            isValid = false;
        } else {
            fullNameError.style.display = "none";
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
