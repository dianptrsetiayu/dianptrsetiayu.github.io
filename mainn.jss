onload = () =>{
        document.body.classList.remove("container");
};
const audio = new Audio('https://drive.google.com/file/d/1gtRnoOaspPRt3tEd_cctjR7ofly8T7eg/view?usp=sharing');
const musicPromptWindow = document.getElementById('musicPrompt');
const playAudioBtn = document.getElementById('playAudioBtn');
audio.muted = true;

playAudioBtn.onclick = function () {
  playAudio(audio.muted);
  setPlayAudioBtnText(audio.muted);
};

musicPromptWindow.querySelectorAll('button').forEach((item) => {
  item.onclick = function () {
    playAudio(item.value === '1');
    playAudioBtn.disabled = false;
    musicPromptWindow.remove();
  };
});

function playAudio(doPlayAudio) {
  audio.muted = !doPlayAudio;
  if (doPlayAudio) {
    audio.play();
  }
  setPlayAudioBtnText(audio.muted);  
}

function setPlayAudioBtnText(isAudioMuted) {
  playAudioBtn.innerText = isAudioMuted ? 'Play audio' : 'Mute audio';
}
