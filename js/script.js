// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var players = [];

function onYouTubeIframeAPIReady() {
    const videos = document.querySelectorAll('iframe');
    videos.forEach((video, index) => {
        players[index] = new YT.Player(video.id, {
            events: {
                'onReady': onPlayerReady
            }
        });
    });
}

function onPlayerReady(event) {
    event.target.setVolume(50); // Set volume to 50%
}

document.addEventListener("DOMContentLoaded", function () {
    const applyButton = document.getElementById("applyButton");
    const applyButton1 = document.getElementById("applyButton1");
    const applyButton2 = document.getElementById("applyButton2");
    const popupForm = document.getElementById("popupForm");
    const closeButton = document.getElementById("closeButton1");
    const applicationForm = document.getElementById("applicationForm");
    const firstNameInput = document.getElementById("firstName");
    const mobileInput = document.getElementById("mobile");
    const emailInput = document.getElementById("email");
    const firstNameError = document.getElementById("firstNameError");
    const mobileError = document.getElementById("mobileError");
    const emailError = document.getElementById("emailError");
    const menuButton = document.getElementById("menuButton");
    const sideMenu = document.getElementById("sideMenu");
    const mobileMenuButton = document.getElementById("menuButton1");
    const sideCloseButton = document.getElementById("sideCloseButton");

    const videos = document.querySelectorAll('iframe');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            const iframe = entry.target;
            const player = players[Array.from(videos).indexOf(iframe)];

            if (entry.isIntersecting) {
                player.playVideo();
            } else {
                player.pauseVideo();
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    videos.forEach(video => {
        observer.observe(video);
    });

    function showPopup(id) {
        var popups = document.getElementsByClassName('popup');
        for (var i = 0; i < popups.length; i++) {
            popups[i].classList.remove('active');
        }
        document.getElementById(id).classList.add('active');
    }

    function closePopup(id) {
        document.getElementById(id).classList.remove('active');
    }

    document.querySelectorAll('.navbar a').forEach(item => {
        item.addEventListener('mouseenter', function() {
            showPopup(this.getAttribute('href').substring(1));
        });
    });

    // Add event listener to close popup when clicking outside
    document.addEventListener('click', function(event) {
        var popups = document.getElementsByClassName('popup');
        for (var i = 0; i < popups.length; i++) {
            var popup = popups[i];
            if (popup.classList.contains('active') && !popup.contains(event.target) && !event.target.closest('.navbar')) {
                popup.classList.remove('active');
            }
        }
    });

    // Show popup when Apply button is clicked
    if (applyButton) {
        applyButton.addEventListener("click", function () {
            popupForm.style.display = "flex";
        });
    }

    if (applyButton1) {
        applyButton1.addEventListener("click", function () {
            popupForm.style.display = "flex";
        });
    }

    if (applyButton2) {
        applyButton2.addEventListener("click", function () {
            popupForm.style.display = "flex";
        });
    }

    // Close popup when close button is clicked
    if (closeButton) {
        closeButton.addEventListener("click", function () {
            popupForm.style.display = "none";
        });
    }

    // Close popup when clicking outside the form
    if (popupForm) {
        window.addEventListener("click", function (event) {
            if (event.target === popupForm) {
                popupForm.style.display = "none";
            }
        });
    }

    // Toggle side menu
    function toggleMenu() {
        if (sideMenu.style.left === "-300px") {
            sideMenu.style.left = "0";
        } else {
            sideMenu.style.left = "-300px";
        }
    }

    if (menuButton) {
        menuButton.addEventListener("click", toggleMenu);
    }

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener("click", toggleMenu);
    }

    if (sideCloseButton) {
        sideCloseButton.addEventListener("click", toggleMenu);
    }

    // Close side menu when clicking outside
    if (sideMenu) {
        window.addEventListener("click", function (event) {
            if (
                event.target !== menuButton &&
                event.target !== mobileMenuButton &&
                !sideMenu.contains(event.target)
            ) {
                sideMenu.style.left = "-300px";
            }
        });
    }

    // Form validation on submit
    if (applicationForm) {
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
    }

    // Show the popup form automatically when the page is loaded
    popupForm.style.display = "flex";
});