//? Manipulasi atribut elemen seperti id, class, href, src, dll.

/* 1. .setAttribute(attributeName, value)
=> Menambahkan atau mengubah atribut elemen
  - Kalau atribut belum ada, maka dibuat baru
  - Kalau sudah ada, maka nilainya diganti */
const link = document.getElementById("link");
link.setAttribute("href", "https://github.com/iiohanestj09");
link.setAttribute("title", "Menuju akun Github saya");
// Hasil: <a href="https://github.com/iiohanestj09" id="link" title="Menuju akun Github saya">Klik Saya</a>


/* 2. .getAttribute(attributeName)
=> Mengambil nilai atribut tertentu */
console.log(link.getAttribute("href"));
console.log(link.getAttribute("id"));

/* 3. .removeAttribute(attributeName)
=> Menghaous atribut dari elemen */
link.removeAttribute("title");

/* 4. Akses langsung ke Properti DOM
=> Selain pakai 3 diatas, banyak atribut yg bisa LANGSUNG dikases lewat properti bawaan DOM */
const gambar = document.getElementById("hmm");
gambar.id = "sssshhh";
gambar.src = "img/new.png";
gambar.alt = "Gambar Baru";