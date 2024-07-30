// GameMusic.js

// Create an audio element and set its source
const audio = new Audio('EgyptianMusic.mp3');
const audioKey = new Audio('secondKeySound.mp3');
var play=0;

// Function to play the audio
function playMusic() {
    audio.play().then(() => {
        console.log('Audio started playing');
    }).catch(error => {
        console.error('Error playing audio:', error);
    });

    play=1;
}

// Function to play the key sound
function pressKey() {
    audioKey.currentTime = 0;
    audioKey.play().then(() => {
        console.log('Key sound started playing');
    }).catch(error => {
        console.error('Error playing key sound:', error);
    });
}

// Function to pause the audio
function pauseMusic() {
    audio.pause();
    play=0;
}

// Function to check if the audio is playing
function isAudioPlaying() {
    if(play==0)
        {
            playMusic();
            play=1;
        }
    else {

        audio.pause();
        play=0;

    }
}

// Set up event listeners for buttons
document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const isPlayingButton = document.getElementById('isPlaying');

    playButton.addEventListener('click', playMusic);
    pauseButton.addEventListener('click', pauseMusic);
    isPlayingButton.addEventListener('click', isAudioPlaying);
});
