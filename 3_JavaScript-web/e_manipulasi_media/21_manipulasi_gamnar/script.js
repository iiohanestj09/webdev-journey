/* 1. Mengubah atribut Gambar ('src', 'alt', 'title', dll)
Kadang kita ingin mengganti gambar secara dinamis, misalnya utk fitur Slideshor atau saat user melakukan aksi tertentu  */
const img1 = document.getElementById("myImage1");
const btn1 = document.getElementById("changeBtn1");

btn1.addEventListener("click", () => {
  img1.src = "img/img-2.jpg";     // ganti source gambar
  img1.alt = "Gambar 2";
  img1.title = "Ini gambar yg sudah diganti";
});


/* 2. Preload Gambar
Agar saat diganti gambarnya tidak nge-lag, kita bisa preload terlebih dahulu  */ 
const img2 = document.getElementById("myImage2");
const btn2 = document.getElementById("changeBtn2");
const preloadImg = new Image();
preloadImg.src = "img/img-2.jpg";   // disimpan di cache browser

btn2.addEventListener("click", () => {
  img2.src = preloadImg.src;        // lebih cepat muncul
});


// 3. Contoh: Slideshow Sederhana 
const imgs = ["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg", "img/img-4.jpg", "img/img-5.jpg"]; 
let index = 0;
const slideImg = document.getElementById("slideImg");

// setInterval(() => {
//   index = (index + 1) % imgs.length;  // loop agar balik ke awal sata diakhir array
//   slideImg.src = imgs[index];
// }, 2000);   // ganti setiap 3 detik


// 4. Contoh: Hover Gambar
const hoverImg = document.getElementById("hoverImg");
const afterImg = new Image();
afterImg.src = "img/img-2.jpg";
const beforeImg = new Image();
beforeImg.src = "img/img-1.jpg";

hoverImg.addEventListener("mouseenter", () => {
  hoverImg.src = afterImg.src;
});

hoverImg.addEventListener("mouseleave", () => {
  hoverImg.src = beforeImg.src;
});


// 5. Contoh: Gallery Thumbnail
const mainImg = document.getElementById("mainImg");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach(t => {     // bekerja di awal, menanam event listener ke setiap elemen thumbnail
  t.addEventListener("click", () => {
    mainImg.src = t.src;    // ambil source dari thumbnail
  });
});
