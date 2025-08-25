### Apa itu API?
API = _Application Programming Interface_ <br>
Artinya, antarmuka (jembatan) yg memungkinkan __dua aplikasi berbeda saling berkomunikasi__.

---

### Analogi Sederhana
Bayangkan dalam konsep Restoran:
  * Pelanggan = aplikasi (Client/browser)
  * Dapur = Server (Penyedia data)
  * Pelayan = API (Jembatan komunikasi) <br>
Pelanggan tidak bisa langsung ke dapur ambil makanan. Pelanggan harus pesan lewat Pelayan. Pelayan akan ke Dapur, ambil makanan sesuai pesanan, lalu mengantarkannya ke meja Pelanggan.

Begitu juga API:
  * Browser -> kirim permintaan (request)
  * Server -> balas dengan data (response)
  * API jadi penghubungnya

---

### API dalam Web
Di dunia web, __API biasanya berbentuk URL__ yg mengembalikkan data, biasanya dalam format __JSON__.

Contoh:
-> https://jsonplaceholder.typicode.com/users <br>
Kalau dibuka di browser, akan muncul data JSON (mirip objek di JS)

---

### Jenis-Jenis API
  * Browser API -> bawaan JS, contoh: localStorage, fetch(), DOM API
  * Web API / REST API -> layanan di internet, contoh API Cuaca, API Maps, API Twitter
  * Library/Framework API -> kumpulan fungsi dari pustaka, misalnya REACT API, jQuery API

---

### Kenapa API Penting?
  * Bisa ambil data dari server/website lain
  * Bisa buat aplikasi real-time (cuaca, berita, sosial media)
  * Standar komunikasi antar sistem (contoh: aplikasi ojek online pakai API Google Maps utk Rute)

---

Jadi, __API = Jembatan komunikasi__ antara aplikasi/broswer dengan server atau layanan lain.
Tanpa API, suatu aplikasi tidak bisa tukar data dengan luar.