//? Local Storage & Session Storage
/* 1. Apa itu Web Storage
JS punya fitur Web Storage API utk menyimpan data di browser. Ada 2 jenis utama:
  a. Local Storage  -> data tersimpan PERMANEN di browser (meski tab/browser ditutup, data tetap ada)
  b. Session Storage  -> data tersimpan SEMENTARA hanya selama tab dibuka. Kalau tab ditutup, data hilang.

Bedanya dgn cookie:
  - Web Storage lebih besar kapasitasnya (sekitar 5-10MB per domain, sedangkan cookie cuma +-4KB)
  - Data tidak terkirim ke Server otomatis setiap request (lebih aman dan ringan)  */


// 2. API Dasar  -> Keduanya punya method yg sama:
  // A. Simpan data
localStorage.setItem("key", "value");
sessionStorage.setItem("key", "value");

  // B. Ambil data
let val1 = localStorage.getItem("key");
let val2 = sessionStorage.getItem("key");

  // C. Hapus 1 data
localStorage.removeItem("key");
sessionStorage.removeItem("key");

  // D. Hapus semua data
localStorage.clear();
sessionStorage.clear();


/* 3. Simpan Data Object / Array
Data hanya bisa disimpan dalam bentuk string. Kalau objek, harus di-serialize dulu pakai JSON.stringify().  */

const user = { name: "Putra", age: 20 };

// Simpan
localStorage.setItem("user", JSON.stringify(user));

// Ambil
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser);


/* 4. Perbedaan Local vs Session Storage
  a. Local Storage:
    - Lama penyimpanan: Permanen (hingga dihapus manual/clear cache)
    - Ukuran: +-5 sampai 10 MB per domain
    - Berbagi antar tab? Ya, bisa dipakai di semua tab domain yg sama
    - Kegunaan Umum: Tema, Preferensi User, Data Offline
  b. Session Storage:
    - Lama penyimpanan: Hanya saat tab terbuka
    - Ukuran: +-5 MB per domain
    - Berbagi antar tab? Tidak, hanya tab itu saja
    - Kegunaan umum: Status sementara, data form saat sesi aktif  */