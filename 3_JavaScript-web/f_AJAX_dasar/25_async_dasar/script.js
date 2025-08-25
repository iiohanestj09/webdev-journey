// Materi JavaScript Asynchronous lengkap berada di Repositorinya Sendiri, karena materi ini merupakan bagian Pemrograman Lanjutan JS. Berikut Dasar Asynchronous:

/* 1. Apa itu Asynchronous?
  - Synchronous  -> Perintah dijalankan baris demi baris, harus menunggu selesai dulu.
  - Asynchronous  -> Perintah bisa jalan di background, tidak menghambat baris lain. Misalnya ambil data dari server, tunggu 3 detik => browser tidak freeze, tetapi bisa klik tombol.  */


// 2. Fungsi Timer
  // A. setTimeout(callback, delay)  -> Jalankan fungsi sekali setelah 'delay' ms
console.log("Mulai");
setTimeout(() => {
  console.log("Ini muncul setelah 6 detik!");
}, 6000);
console.log("Selesai");

  // B. setInterval(callback, delay)  -> Jalankan fungsi berulang setiap 'delay' ms
  // C. clearInterval(id)  -> Dipakai utk menghentikan setInterval  
let count = 0;
let timer = setInterval(() => {
  console.log("Hitung:", ++count);
  if (count === 5) {
    clearInterval(timer);
  }
}, 1000)

  // D. clearTimeout(id)  -> Dipakai utk membatalkan setTimeout yg sudah dibuat
let timeoutId = setTimeout(() => {
  console.log("Ini tidak akan pernah muncul");
}, 4000);
clearTimeout(timeoutId);


// 3. Callback  -> fungsi yg dikirm sebagai argument utk dijalankan nanti
function getData(panggil) {
  console.log("Ambil data...");
  setTimeout(() => {
    panggil("Data berhasil diambil!");
  }, 7000);
}

getData((result) => {
  console.log(result);
});
getData((result) => {
  console.log(result, 1);
  console.log(result, 2);
})


// 4. Promise  -> adalah Objek yg merepresentasikan Proses Asynchronous
let ambilData = new Promise((resolve, reject) => {
  let sukses = true;
  setTimeout(() => {
    if (sukses) resolve("Data OK");
    else reject("Gagal ambil data");
  }, 9000);
});

ambilData
  .then((data) => console.log("Sukses:", data))
  .catch((err) => console.log("Error:", err))
  .finally(() => console.log("Program selesai"));


/* 5. Async / Await  -> Sintaks modern utk menulis Promise agar lebih mudah dibaca
  - async  -> Menandai sebuah fungsi agar bisa menggunakan 'await' di dalamnya. Fungsi ini akan selalu mengembalikkan Promise
  - await  -> Menunggu Promise selesai (resolve atau reject) sebelum lanjut ke bais berikutnya. Hanay bisa digunakan di dalam fungsi 'async'  */
async function loadData() {     // modif kode 59 - 62
  try {
    console.log("Loading...");
    let result = await ambilData;
    console.log("Hasil:", result);
  } catch(err) {
    console.log("Error:", err);
  } finally {
    console.log("Done");
  }
}
loadData();