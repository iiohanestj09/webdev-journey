/* Fetch adalah API bawaan JS modern utk melakukan HTTP Request (GET, POST, PUT, DELETE, dll) ke Server.
Biasanya dipakai utk ambil atau kirim data ke API / backend / file eksternal.  */

/* 1. Sintaks Dasar
fetch(url, options)
  .then(response => response.json())      // Ubah response jadi JSON
  .then(data => console.log(data))        // hasil data
  .catch(err => console.error("Error:", err));

  - url  -> alamat yg dituju (misalnya API)
  - options  -> konfigurasi request (method, headres, bodt, dll)
  - Hasil fetch() berupa Promise  */


/* 2. Contoh: GET Request
Ambil data publik (misalnya JSON Placeholder  */
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log("Data:", data))
  .catch(err => console.error("Error:", err));


// 3. Contoh: POST Request (Kirim Data)
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Belajar fetch",
    body: "Ini contoh data baru",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log("Data terkirim:", data))
  .catch(err => console.error("Error:", err));


/* 4. Contoh: dengan async/await
Lebih rapih daripada .then() chaining  */
async function getData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log("Data:", data);
  } catch (err) {
    console.error("Error:", error);
  }
}
getData();


// 5. Contoh: Fetch utk File Lokal (misalnya JSON -> coba.json)
fetch("coba.json")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));


/* 6. Menangani Error HTTP
Note: fetch() tidak otomatis error kalau status HTTP 404/500. 
Kita harus cek sendiri:  */
fetch("https://jsonplaceholder.typicode.com/invalid-url")
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP Error: " + response.status);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error("Gagal fetch:", err));


/* Ringkasan:
  - fetch() = cara modern utk ambil/kirim data ke server
  - Bisa dipakai dengan .then() atau async/await
  - Harus cek response.ok utk tahu sukses atau gagal  */ 