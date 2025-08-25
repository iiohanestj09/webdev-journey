/* XMLHttpRequest (XHR)
adalah CARA LAMA di JS utk melakukan AJAX Request (ambil/kirim data ke server tanpa reload halaman)
Dulu ini populer sebelum ada fetch()  */


/* 1. Sintaks Dasar
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

xhr.onload = function() {
  if (xhr.status === 200) {
    console.log("Data:", xhr.responseText);
  } else {
    console.error("Error:", xhr.status);
  }
};

xhr.onerror = function() {
  console.error("Request gagal!");
};

xhr.send();

  - open(method, url, async)  -> tentukan metode & url (umumnya true = async).
  - onload  -> dijalankan ketika request selesai.
  - onerror  -> dijalankan jika error jaringan.
  - send()  -> mengirim request.  */


// 2. Contoh: GET Request
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

xhr.onload = function() {
  if (xhr.status === 200) {
    let data = JSON.parse(xhr.responseText);
    console.log("Judul:", data.title);
  }
};
xhr.send();


// 3. Contoh: POST Request
let xhr2 = new XMLHttpRequest;
xhr2.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhr2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

xhr2.onload = function() {
  if (xhr2.status === 201) {
    console.log("Data terkirim:", xhr2.responseText);
  }
};

xhr2.send(JSON.stringify({
  title: "Belajar XHR",
  body: "Ini contoh data baru",
  userId: 1
}));


/* Kekurangan XHR:
  - Sintaks panjang & ribet dibanding fetch()
  - Tidak berbasis Promise, jadi banyak callback hell
  - Error handling lebih sulit
  - Tidak se-modern fetch()

Kapan dipakai?
  - Jarang sekali sekarang
  - Masih ada di Legacy Project atau Browser Lama
  - Untuk belajar awal/sejarag AJAX  */