/* Dalam JS, kita bisa membuat elemen baru (misalnya <p>, <div>, <li>, dll) dengan document.createElement()
Elemen baru ini tidak otomatis muncul di halaman sampai kita MENAMBAHKANNYA ke DOM menggunakan seperti .appendChild() atau appen() */

/* 1. Membuat Elemen  -> document.createElement()
  - Membuat elemen kosong dgn nama tag tertentu
  - Belum ada konten atau atribut */
const newDiv = document.createElement("div");
const newP1 = document.createElement("p");
console.log(newDiv);    // <div></div>


/* 2. Menambahkan Konten ke Elemen
Setelah membuat elemen, kita bisa menambahkan teks/konten:
  - .textContent
  - .innerHTML
  - createTextNode() */
newP1.textContent = "Ini paragraf baru!";
newDiv.innerHTML = "<h1>Halo Dunia</h1>";

const newP2 = document.createElement("p");
const textNode = document.createTextNode("Halo dari createTextNode!");
newP2.appendChild(textNode);  // <p>Halo dari createTextNode</p>


/* 3. Menambahkan Atribut
Gunakan .setAtribute() atau properti langsung */
newP1.id = "paragraf1";
newP1.setAttribute("class", "coba-coba");


/* 4. Menyisipkan ke DOM
Supaya terlihat di halaman, elemen baru harus ditambahkan ke DOM menggunakan:
  - .appendChild()  -> menambahkan sebagai ANAK TERAKHIR
  - .prepend()  -> menambahkan sebagai ANAK PERTAMA
  - .before() / .after()  -> menambahkan sebelum/sesudah elemen tertentu
  - .replaceWith()  -> mengganti elemen lama */
const container = document.getElementById("container");
newDiv.appendChild(newP1);
container.appendChild(newDiv);

const text = document.createTextNode("Ini baris pertama dgn .prepend()");
container.prepend(text);