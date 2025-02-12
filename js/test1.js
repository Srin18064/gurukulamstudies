/* scripts.js */
document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.video-thumbnail');
    const videoPlayer = document.getElementById('video-player');
    const videoTitle = document.getElementById('video-title');
    const videoDescription = document.getElementById('video-description');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const videoId = thumbnail.getAttribute('data-video-id');
            const title = thumbnail.getAttribute('data-title');
            const description = thumbnail.getAttribute('data-description');

            videoPlayer.src = `https://www.youtube.com/embed/${videoId}`;
            videoTitle.textContent = title;
            videoDescription.textContent = description;
        });
    });

    // Swipe functionality
    let startX;

    document.querySelector('.video-list').addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    document.querySelector('.video-list').addEventListener('touchmove', (e) => {
        const moveX = e.touches[0].clientX - startX;
        document.querySelector('.video-list').scrollLeft -= moveX;
        startX = e.touches[0].clientX;
    });
});
