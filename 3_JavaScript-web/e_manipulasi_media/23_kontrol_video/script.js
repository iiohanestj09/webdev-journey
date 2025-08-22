// 1. Button Memutar, Pause, Stop
const myVideo = document.getElementById("myVideo");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");

playBtn.addEventListener("click", () => myVideo.play());
pauseBtn.addEventListener("click", () => myVideo.pause());
stopBtn.addEventListener("click", () => {
  myVideo.pause();
  myVideo.currentTime = 0;    // balik ke awal
});

console.log("Video loaded:", myVideo.readyState);   // 4 berarti sudah dimuat dan siap diputar


// 2. Kontrol Volume & Mute
myVideo.volume = 0.5;
myVideo.muted = true;

  // Slider input  -> dari elemen input:range
document.getElementById("volume").addEventListener("input", (e) => {
  myVideo.volume = e.target.value;
});


// 3. Loncat ke waktu tertentu
myVideo.currentTime = 10;   // langsung loncat ke detik ke-10


// 4. Menangani Event Video  -> video punya banyak Event, contoh:
myVideo.addEventListener("play", () => console.log("Video diputar"));
myVideo.addEventListener("pause", () => console.log("Video dijeda"));
myVideo.addEventListener("ended", () => console.log("Video selesai"));
myVideo.addEventListener("timeupdate", () => {
  console.log("Posisi:", myVideo.currentTime.toFixed(1));
});


// 5. Contoh Custom Video Player Sederhana
const customVideo = document.getElementById("customVideo");
const toggleBtn = document.getElementById("toggleBtn");
const seekBar = document.getElementById("seekBar");

// play/pause toggle
toggleBtn.addEventListener("click", () => {   
  if (customVideo.paused) {     // Saat tekan play status pause masih 'true' saat evaluasi JS berlangsung. (Js akan evaluasi kondisi langsung != efek dari aksi)
    customVideo.play();
    toggleBtn.textContent = "Pause";
  } else {
    customVideo.pause();      // Saat tekan pause berarti kondisi videonya sedang play (paused = false) dan akan di-pause.
    toggleBtn.textContent = "Play";
  }
});

// update seek bar
customVideo.addEventListener("timeupdate", () => {
  seekBar.value = customVideo.currentTime;
  seekBar.max = customVideo.duration;
});

// loncat ke waktu tertentu via seek bar
seekBar.addEventListener("input", () => {
  customVideo.currentTime = seekBar.value;
})