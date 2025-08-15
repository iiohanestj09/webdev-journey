/* A. Berdasarkan ID
* document.getElementById("namaId");
- Mengembalikkan 1 elemen dengan id yg cocok
- Cepat, tapi hanya utk 1 elemen karena id harus unik di HTML.
*/
const judul = document.getElementById("judul");
console.log(judul);       


/* B. Berdasarkan Nama Tag
* document.getElementByTagName("namaTag");
- Mengembalikkan HTMLCollection (Mirip array tapi bukan array asli)
- Bisa diakses dengan indeks [0], [1], ...  
*/
const paragraf = document.getElementsByTagName("p");
console.log(paragraf[0]);
console.log(paragraf[0].textContent);
console.log(paragraf[1]);


/* C. Berdasarkan Nama Class
* document.getElementByClassName("namaClass");
- Mengembalikkan HTMLCollection.
- Bisa ada banyak elemen dengan class yg sama
*/
const ket = document.getElementsByClassName("keterangan");
console.log(ket[0]);


/* D. Query Selector (CSS Selector)
* document.querySelector("selector");
- Menggunakan CSS Selector seperti di CSS (#id, .class, tag, kombinasi).
- Mengembalikkan ELEMEN PERTAMA yg cocok.
*/ 
console.log(document.querySelector("#judul"));
console.log(document.querySelector("p"));     // Sama
console.log(document.querySelector("p"));     // Sama
console.log(document.querySelector(".keterangan"));
console.log(document.querySelector("p.coba"));


/* E. Query Selector All
* document.querySelectorAll("selector");
- Mengembalikkan NodeList (Mirip array, bisa di-loop dgn forEach)
- Cocok utk memilih SEMUA elemen yg cocok dgn selector
*/
const semuaP = document.querySelectorAll("p");
semuaP.forEach((el, index) => {
  console.log(`${index} -> ${el.textContent}`);
})