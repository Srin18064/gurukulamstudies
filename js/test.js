// script.js
document.addEventListener('DOMContentLoaded', function () {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-description');
  const closeBtn = document.querySelector('.close');

  // Open lightbox on details button click
  galleryItems.forEach(item => {
    const detailsBtn = item.querySelector('.details-btn');
    detailsBtn.addEventListener('click', () => {
      const imgSrc = item.querySelector('img').src;
      const title = item.querySelector('.overlay h3').textContent;
      const description = item.querySelector('.overlay p').textContent;
      lightboxImg.src = imgSrc;
      lightboxTitle.textContent = title;
      lightboxDesc.textContent = description;
      lightbox.style.display = 'flex';
    });
  });

  // Close lightbox on close button click
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Close lightbox on outside click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});