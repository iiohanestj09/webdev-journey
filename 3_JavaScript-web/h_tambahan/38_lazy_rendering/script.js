/* Apa itu Lazy Rendering?
Lazy Rendering = menunda pembuatan/penampilan elemen DOM sampai memang diperlukan.
=> Tujuannya agar loading awal lebih cepat & DOM lebih ringan.  

Berikut Kasus & Implementasi: */

/* 1. Render Data bertahap
Misal ada 1000 item.
❌ Buruk: Langsung render semua -> DOM jadi berat
✅ Lebih baik: render 20 dulu, sisanya saat user scroll.  */
const list = document.getElementById("list");
const loadMoreBtn = document.getElementById("loadMore");

let current = 0;
const limit1 = 20;

function renderItems() {
  for (let i = 0; i < limit1; i++) {
    if (current >= 1000) {
      loadMoreBtn.style.display = "none";  // habis
      return;
    }
    const li = document.createElement("li");
    li.textContent = "Item" + (current + 1);
    list.appendChild(li);
    current++;
  }
}

loadMoreBtn.addEventListener("click", renderItems);

// render pertama
renderItems();


/* 2. Lazy Rendering dengan Intersection Observer (render saat elemen hampir terlihat di layar)
Misal utk artikel panjang -> bagian bawah dirender hanya saat hampir masuk viewport  */
const container = document.getElementById("container");
let counter = 0;
let maxItem = 80;

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    // render 15 item baru
    for (let i = 0; i < 15; i++) {
      if (counter >= maxItem) {
        observer.disconnect();    // stop observasi
        return;
      }
      const div = document.createElement("div");
      div.textContent = "Item " + ++counter;
      div.className = "item";
      container.appendChild(div);
    }
  }
});

observer.observe(document.getElementById("sentinel"));
// Mirip infinite scroll, tapi lebih pintar: render hanya saat user hampir melihat.


/* 3, Lazy Rendering Komponen Berat
Kalau punya komponen mahal (misalnya grafik, chart, map) -> render saat tab terbuka / user klik tombol  */
document.getElementById("showChart").addEventListener("click", () => {
  import("./chart.js").then(module => {     // contoh ada grafik di file chart.js
    module.renderChart("chartContainer");   // render saat dibutuhkan
  });
});
// Dengan import(), modul chart baru dimuat ketika dipakai.