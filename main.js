const audio = new Audio('https://vmirror.imslp.org/files/imglnks/usimg/0/06/IMSLP197806-PMLP02397-3-ClairDeLune-j.mp3');
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

onload = () =>{
        document.body.classList.remove("container");
};
