/* Event Capturing & Bubbling 
  Ketika sebuah event terjadi pada suatu elemen, event tersebut tidak hanya berhenti di elemen itu saja.
  Event akan mengalir melalui hierarchy DOM dalam dua fase utama: 
  
1. Event Capturing (Menurun / Top -> Down)
  - Event berjalan dari elemen paling luar (root: document) ke elemen target
  - Mirip seperti menyelam dari luar ke dalam
  - Jarang digunakan, tapi berguna utk kasus tertentu 


2. Event Bubbling (Naik / Bottom -> Up)
  - Event dimulai dari elemen target, lalu naik ke parent, grandparent, ..., hingga document
  - Ini yg secara DEFAULT dipakai di JS
  - Sangat sering digunakan */


// Contoh Event Bubbling
document.getElementById("child1").addEventListener("click", () => {
  console.log("Button diklik!");
});

document.getElementById("parent1").addEventListener("click", () => {
  console.log("Parent kena event (bubbling)");
});

/* Contoh Event Capturing
Untuk mengaktifkan capturing phase, tambahkan 'true' di paramtere ketiga addEventListener() */
document.getElementById("parent1").addEventListener("click", () => {
  console.log("Parent menangkap event (capturing)");
}, true);

/* ## Alur Event 'click'
  a. Capturing Phase: document -> body -> div#parent -> button#child (baris 29)
  b. Target Phase: button#child -> (event terjadi di sini, baris 19) 
  c. Bubbling Phase: div#parent -> body -> document (baris 23) */ 


/* ## Menghentikan Aliran Event
Kadang kita ingin event berhenti di elemen tertentu.
  - e.stopPropagation()  -> menghentikan bubbling/capturing lebih lanjut
  - e.stopImmediatePropagation()  -> menghentikan bubbling dan listener lain pada elemen yg sama
  - e.preventDefault()  -> mencegah aksi default browser (misalnya klik link tidak berpindah halaman). */
document.getElementById("child2").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Button diklik");
});