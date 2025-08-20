/* 1. Mouse Events 
Event yg terjadi saat pengguna berinteraksi dgn MOUSE (atau perangkat pointer lain, seperti trackpad, stylus, touchscreen) 
- click : saat elemen diklik (tekan + lepas tombol mouse kiri)
- dblclick : klik ganda
- mousedown : saat tombol mouse ditekan (belum dilepas)
- mouseup : saat tombol mouse dilepas
- mouseover : saat mouse masuk ke area elemen
- mouseout : saat mouse keluar dari area elemen
- contextmenu : saat klik kanan (muncul menu konteks) */
const btn = document.getElementById("btn");

btn.addEventListener("mouseover", () => {
  console.log("Mouse masuk ke tombol");
});

btn.addEventListener("mouseout", () => {
  console.log("Mouse keluar dari tombol");
});

btn.addEventListener("click", () => {
  console.log("Tombol diklik");
});


/* 2. Keyboard Events
Event yg terjadi saat pengguna menekan tombol di keyboard
- keydown : saat tombol ditekan (akan berulang jika tombol ditahan)
- keyup : saat tombol dilepas
- keypress : menangkap penekanan tombol karakter, yg non-karakter tidak termasuk (ctrl, shift, dll) => (deprecated, jarang dipakai,ganti pakai keydown/keyup) */
const input = document.getElementById("teks");

input.addEventListener("keydown", (e) => {
  console.log("Tombol ditekan:", e.key);
});

input.addEventListener("keyup", (e) => {
  console.log("Tombol dilepas:", e.key);
});


/* 3. Form Events 
Event yg terkait dgn elemen form (<input>, <textarea>, <select>, <form>)
- submit : saat form dikirim
- change : saat nilai input berubah (dan keluar fokus)
- input : saat nilai input berubah langsung (real-time)
- focus : saat elemen mendapat fokus (misalnya kursor masuk)
- blur : saat elemen kehilangan fokus */
const form = document.getElementById("form");
const nama = document.getElementById("nama");

nama.addEventListener("focus", () => {
  console.log("Input nama sedang aktif");
});

nama.addEventListener("input", () => {
  console.log("Isi input sekarang:", nama.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();   // mencegah reload
  console.log("Form dikirim dgn nama:", nama.value);
});

nama.addEventListener("change", () => {
  console.log("Nilai input telah diubah dan keluar fokus:", nama.value);
});

nama.addEventListener("blur", () => {
  console.log("Input nama tidak aktif lagi");
});


/* 4. Clipboard Events
Event yg berhubungan dgn copy-paste
- copy : saat user menyalin (ctrl+c)
- cut : saat user memotong (cstr+x)
- paste : saat user menempelkan (ctrl+v) */
const  clipboard = document.getElementById("input");

clipboard.addEventListener("copy", (e) => {
  console.log("User menyalin:", window.getSelection().toString());
});

clipboard.addEventListener("paste", (e) => {
  console.log("User menempel:", e.clipboardData.getData("text"));
});

clipboard.addEventListener("cut", (e) => {
  console.log("User memotong:", window.getSelection().toString());
});


/* 5. Window & Document Events
Event yg terjadi di tingkat browser / dokumen
- DOMContentLoaded : saat struktur HTML selesai dimuat (sebelum gambar/CSS)
- load : saat halaman beserta semua resource (gambar, CSS, dll) selesai dimuat
- resize : saat ukuran jendela browser berubah
- scroll : saat user menggulir halaman
- error : saat ada error dalam pemuatan resource */
window.addEventListener("DOMContentLoaded", () => {
  alert("DOM selesai dimuat");
});

window.addEventListener("resize", () => {
  console.log("Ukuran jendela:", window.innerWidth, "x", window.innerHeight);
});

window.addEventListener("scroll", () => {
  console.log("Scroll posisi Y:", window.scrollY); 
});


/* 6. Touch Events (Mobile) 
Event untuk layar sentuh (smartphone/tablet/laptpop touchscreen)
- touchstart : saat jari/stylus menyentuh layar
- touchend : saat jari/stylus dilepas
- touchmove : saat jari/stylus digerakkan di layar */


/* 7. Media Events
Khusus utk elemen media (<audio>, <video>)
- play : saat media mulai diputar
- pause : saat media dijeda
- ended : saat media selesai
- timeupdate : saat posisi waktu media berubah */ 

/* 8. Lainnya
-> Drag Event
-> Wheel Event
-> Pointer Event
-> Animation / Transition Event */ 