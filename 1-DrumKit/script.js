document.addEventListener('keydown', function (event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); // Select the audio with a given keyCode and returns the HTML element
    const key = document.querySelector(`li[data-key="${event.keyCode}"]`);

    if (!audio) return;

    audio.volume = 0.2;
    audio.currentTime = 0;

    audio.play();

    key.classList.add('playing');
});

function removeTransition(event) {
    if (event.propertyName != "transform") return;

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key'); // Get all keys (li's)
keys.forEach(key => key.addEventListener("transitionend", removeTransition)); // For each key, if it was transitioned, call removeTransition

