onload = () =>{
        document.body.classList.remove("container");
};
const audio = new Audio('https://docs.google.com/uc?export=open&id=1gtRnoOaspPRt3tEd_cctjR7ofly8T7eg');
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
