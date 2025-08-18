//? 3 Properti utama sebelum saat mau Manipulasi Isi Konten

/* 1. .texContent
=> Fungsi: Mengambil / Mengubah teks MENTAH dalam elemen.
  - Selalu mengembalikkan semua teks (termasuk teks yg tersembunyi dgn CSS)
  - Tidak memproses HTML tag, hanya menampilkan teksnya (isinya)
  - Semua tag HTML akan dianggap sebagai teks biasa di dalamnya, maka tidak bisa menjalankan Script atau HTML */
const p1 = document.getElementById("contoh");
console.log(p1.textContent);
// const sembunyi = document.getElementsByTagName("span");
// console.log(sembunyi[0].textContent);

p1.textContent = "Teks Baru";   // akan jadi teks biasa, tidak bisa isi/jalankan Script/HTML hasil modif
console.log(p1.textContent);
// p1 = "Coba";   ERROR, karena CONST. Kita tidak bisa merubah isinya. Tapi kalau p1.textContent itu kita mengubah PROPERTI dari OBJEK tsb.


/* 2. .innerHTML
=> Fungsi: Mengambil / Mengubah konten HTML mentah dalam elemen.
  - Mengembalikkan string HTML (termasuk tag)
  - Bisa digunakan utk menyisipkan HTML baru
  - berbahaya kalau isi berasal dari user input. (Rentan XSS(Cross-Stire Scripting)) */
const p2 = document.getElementById("contoh2");
console.log(p2.innerHTML);

p2.innerHTML = "<i>Teks Miring</i>";
console.log(p2.innerHTML);


/* 3. .innerText
=> Fungsi: Mengambil / Mengubah teks yg terlihat di layar (rendered text).
  - Tidak mengambil teks yg tersembunyi (display:none atau visibility:hidden)
  - Memperhatikan style CSS (misalnya line-break)
  - Lebih lambat dari .textContent karena harus menghitung gaya CSS */
const p3 = document.getElementById("contoh3");
console.log(p3.innerText);

p3.innerText = "Apalah"
console.log(p3.innerText);