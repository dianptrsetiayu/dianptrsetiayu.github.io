onload = () =>{
        document.body.classList.remove("container");
};
const audio = new Audio('https://od.lk/s/MzdfMjg2ODMxOThf/music.mp3');
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
  playAudioBtn.innerText = isAudioMuted ? ' ' : '  ';
}
