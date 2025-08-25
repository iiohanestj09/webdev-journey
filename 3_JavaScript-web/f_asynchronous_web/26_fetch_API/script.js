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