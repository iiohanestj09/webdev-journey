// Daripada set style satu-satu dan Inline, disarankan menggunakan CSS class dengan CSS eksternal
/* Konsepnya:
- Di CSS, kita MENYEDIAKAN Class Style
- JS dihubungkan dengan HTMl lewat 'Seleksi Elemen'
- JS melakukan [operasi] dari [hasil seleksi elemen HTML] utk manipulasi Style CSS di elemen tersebut
*/ 

const title = document.getElementById("title");

// 1. Menambah class baru  -> .classList.add("namaClass")
title.classList.add("highlight");
title.classList.add("hidden");      


// 2. Menghapus class tertentu  -> .classList.remove("namaClass") 
title.classList.remove("hidden");


// 3. Menambah class kalau BELUM ADA, Menghapus kalau SUDAH ADA  -> .classList.toggle("namaClass")
title.classList.toggle("highlight");
title.classList.toggle("big");


// 4. Cek apakah sebuah elemen punya class tertentu  -> .classList.contains("namaClass")
console.log(title.classList.contains("highlight"));
console.log(title.classList.contains("big"));