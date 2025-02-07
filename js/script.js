// Get elements
const openPopupBtn = document.getElementById('applyPopup');
const popupOverlay = document.getElementById('popupOverlay');
const closePopupBtn = document.getElementById('closePopupBtn');

// Open Popup
openPopupBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
});

// Close Popup
closePopupBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});

// Close Popup when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.style.display = 'none';
    }
});


document.getElementById('myForm').addEventListener('submit', function(event) {
    let form = event.target;
    let isValid = form.checkValidity();
    let elements = form.elements;

    for(let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let errorElement = document.getElementById(element.id + 'Error');
        
        if(errorElement) {
            if(element.validity.valid) {
                errorElement.textContent = '';
            } else {
                if(element.validity.valueMissing) {
                    errorElement.textContent = 'This field is required';
                } else if(element.validity.patternMismatch || element.validity.typeMismatch) {
                    errorElement.textContent = 'Invalid input';
                }
            }
        }
    }

    if (!isValid) {
        event.preventDefault();
        alert("Please fill out the form correctly.");
    }
});
