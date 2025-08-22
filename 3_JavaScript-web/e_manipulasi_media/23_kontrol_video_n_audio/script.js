//? Kontrol Video dan Audio hampir sama (sebelas dua belas)

// 1. Button Play, Pause, Stop
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


// A. Contoh: Custom Video Player Sederhana
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


// B. Contoh: Playlist Audio Sederhana
const audioPlayer = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const nowPlaying = document.getElementById("nowPlaying");

// Daftar Lagu
const playlist = [
  { title: "Lagu 1", src: "audio/audio1.mp3" },
  { title: "Lagu 2", src: "audio/audio2.mp3" },
  { title: "Lagu 3", src: "audio/audio3.mp3" },
  { title: "Lagu 4", src: "audio/audio4.mp3" }
];

let currentIndex = 0;

// load lagu pertama
function loadSong(index) {
  audioPlayer.src = playlist[index].src;
  nowPlaying.textContent = "Now Playing: " + playlist[index].title;
}
loadSong(currentIndex);

// play/pause toggle
playPauseBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = "⏸ Pause";
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = "▶️ Play";
  }
});

// Next lagu
document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % playlist.length;
  loadSong(currentIndex);
  audioPlayer.play();
  playPauseBtn.textContent = "⏸ Pause";
});

// Prev lagu
document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1) + playlist.length % playlist.length;
  loadSong(currentIndex);
  audioPlayer.play();
  playPauseBtn.textContent = "⏸ Pause";
});

// Auto next setelah selesai
audioPlayer.addEventListener("ended", () => {
  currentIndex = (currentIndex + 1) % playlist.length;
  loadSong(currentIndex);
  audioPlayer.play();
})