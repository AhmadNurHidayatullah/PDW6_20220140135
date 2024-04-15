const audio = document.getElementById('myAudio');
const audioButton = document.getElementById('audioButton');

audioButton.addEventListener('click', toggleAudio);

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        audioButton.textContent = 'Pause Audio';
    } else {
        audio.pause();
        audioButton.textContent = 'Play Audio';
    }
}
