## Apa itu AJAX?
AJAX singkatan dari Asynchronous JavaSCript and XML <br>
Ini adalah teknik (bukan bahasa/program) untuk Mengambil atau Mengirim data ke Server __tanpa harus me-reload halaman Web__. <br>
Singkatnya, AJAX = teknik komunikasi asinkron antara browser <-> server tanpa reload.

---

### Konsep Utama
Sebelum ada AJAX:
  * Setiap kali butuh data baru -> halaman harus __reload__
  * UX (User Experience) jadi lambat
Dengan AJAX:
  * Halaman __tidak reload penuh__
  * Hanya bagian tertentu yg diperbarui
  * Lebih cepat & interaktif -> kayak aplikasi desktop

---

### Cara Kerja AJAX (Alur Aederhana)
  1. User melakukan aksi (misal klik tombol).
  2. JavaScript mengirim request ke Server (pakai XHR atau fetch).
  3. Server memproses dan mengirim balik data (biasanya JSON).
  4. JavaScript menampilkan data ke halaman __tanpa reload__.

---

### Kenapa Disebut XML?
Dulu (tahun 2000-an), data dari Server sering dikirim dalam format __XML__. Sekarang hampir semua pakai JSON karena lebih simpel. Tapi istilah AJAX tetap dipakai sampai sekarang.

---

### Contoh Penggunaan AJAX
  * Auto-complete (misalnya search Google, langsung muncul saran)
  * Load data tanpa reload (misalnya infinite scroll Instagram)
  * Update keranjang belanja (e-commerce)
  * Chat real-time sederhana