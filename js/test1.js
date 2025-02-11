// script.js
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxContainer = document.createElement('div');
    const lightboxImage = document.createElement('img');
    const lightboxDescription = document.createElement('div');

    lightboxContainer.classList.add('lightbox');
    lightboxContainer.appendChild(lightboxImage);
    lightboxContainer.appendChild(lightboxDescription);
    document.body.appendChild(lightboxContainer);

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightboxImage.src = item.querySelector('img').src;
            lightboxDescription.textContent = item.querySelector('.description').textContent;
            lightboxContainer.classList.add('active');
        });
    });

    lightboxContainer.addEventListener('click', () => {
        lightboxContainer.classList.remove('active');
    });
});

