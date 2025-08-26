/* 1. Apa itu Modularisasi?
Modularisasi = cara memecah kode menjadi beberapa file kecil (modul), agar:
  - Rapi -> tidak semua kode numpuk di script.js
  - Reusable -> fungsi bisa dipakai di banyak tempat
  - Maintainable -> lebih mudah diperbaiki/dikelola

Di JavaScript modern (ES6+), kita bisa membuat modul dengan export & import.  */


/* 2. Cara kerja Dasar ES Modules
Agar modul bisa dipakai:
  - Gunakan 'export' di file asal (supata fungsi/variabel bisa diambil dari luar)
  - Gunakan 'import' di file tujuan (untuk menggunakan fungsi/variabel yg diekspor  
  
<script type="module" src="./main.js"></script>

type="module" wajib, kalau tidak browser tidak mengenali import / export.  */


/* 3. Export Named 
=> Kita mengekspor banyak hal sekaligus dengan nama maisng-masing  
  - harus pakai nama yg sama (export & import)
  - Bisa export lebih dari satu hal
  - Bisa juga di-rename saat import  */
export function tambah(a, b) {
  return a + b;
}

export function kali(a, b) {
  return a * b;
}

/* 4. Export Default
=> Hanya boleh ada satu Default export di tiap file. Biasanya dipakai kalau modul punya Fungsi Utama Tunggal
  - Nama saat import bebas -> tidak harus sama
  - Satu file hanya bisa 1 default export  */
export default function greet(name) {
  return `Hello, ${name}!`;
}