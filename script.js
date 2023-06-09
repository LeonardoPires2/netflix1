
alert("Assista o trailer em 'Iniciar'");
function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    trailer.classList.toggle('active');

    video.currentTime = 0;
    video.pause();
}
