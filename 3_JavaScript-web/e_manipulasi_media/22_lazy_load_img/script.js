/* Apa itu Lazy Loading?
Lazy Loading adalah teknik menunda Pemuatan Gambar (atau media lain) sampai benar-benar dibutuhkan -- biasanya ketika elemen tersebut masuk ke area layar (viewport)
Tujuan:
  - Meningkatkan kecepatan load awal website
  - Menghemat Bnadwith (gambar yg tidak kelihatan, tidak perlu di-load)
  - Lebih baik utk SEO & Performa web  */


/* 2. Cara termudah: Native 'loading="lazy"

<img src="img/imageX" alt="gambar" loading="lazy">

HTML5 sudah mendukung lazy loading secara bawaan.
  -> Browser akan otomatis menunda download gambar sampai mendekati viewport
  -> Cocok untuk penggunaan sederhana, hampir tanpa kode JS  */ 


// 3. Cara manual dengan JS
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img.lazy");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;    // pindahkan data-src ke src
        img.onload = () => img.classList.add("loaded");
        obs.unobserve(img); // stop observe setelah load
      }
    });
  });

  lazyImages.forEach(img => observer.observe(img));
});