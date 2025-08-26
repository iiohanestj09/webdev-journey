/* Debouncing & Throttling
Dua teknik ini sering dipakai untuk optimasi performa JavaScript, biar event yg sering dipicu (misal scroll, resize atau keyup) tidak bikin aplikasi berat.
Event seperti scroll atau input bisa terpanggil ratusan kali per detik. 
Contoh: saat user mengetik, setiap huruf memicu input event -> kalau langsung panggil API search, server bisa banjir request.
Solusi: batasi frekuensi event handling dengan debounce atau throttle  */

/* 1. Debounce
=> Jalankan fungsi setelah user berhenti melakukan aksi dalam jangka waktu tertentu.
Contoh kasus: search bar. API hanya dipanggil ketika user berhenti mengetik 500ms.  */ 
function debounce(fn, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);    // reset timer
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", debounce(function(e) {
  console.log("Cari:", e.target.value);
  // Misalnya fetch API search di sini
}, 500));
// Jadi, kalau user ketik "abc", hanya sekali fungsi dipanggil (500ms setelah berhenti).


/* 2. Throttle
=> Jalankan fungsi maksimal sekali dalam interval tertentu, walaupun event dipanggil berkali-kali.
Contoh kasus: event scroll -> kita hanya update posisi tiap 200ms, bukan tiap pixel.  */
function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

window.addEventListener("scroll", throttle(() => {
  console.log("Scroll:", window.scrollY);
}, 200));
// Walaupun scroll super cepat, fungsi hanya jalan tiap 200ms