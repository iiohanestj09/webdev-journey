### 1. Optimasi Gambar
  * __Gunakan format modern__
    + 'WebP'
      - Dikembangkan oleh Google
      - Komprelsi lebih baik dari JPG & PNG (lossy/lossless)
      - Mendukung transparansi & animasi
      - Didukung hampir semua browser modern
      - Cocok untuk: gambar website umum, foto produk, ikon, banner.
    + 'AVIF'
      - Format baru berbasis codec video AV1
      - Lebih efisien dari WebP (file lebih kecil kualitas sama)
      - Mendukung HDR, transparansi, animasi
      - Belum semua browser mendukung 100% tapi sudah banyak (Chrome, Firefox, Edge)
      - Cocok untuk: website yg fokus performa, mobile-first
  * __Gunakan ukuran sesuai kebutuhan__
  Jangan upload foto kamera 5mb utk thumbnail 200px. Contoh:
  ```
  <picture>
    <source srcset="gambar.avif" type="image/avif">
    <source srcset="gambar.webp" type="image/webp">
  </picture>
  ```
  * __Responsive Images ('srcset')__
  Browser pilih otomatis gambar terbaik sesuai layar.
  ```
  <img
    src="small.jpg"
    srcset="small.jpg 480w, medium.jpg 768w large.jpg 1200w"
    sizes="(max-width: 600px) 480px, (max-width: 900px) 768px, 1200px"
    alt="contoh gambar">
  ```

---

### 2. Optimasi Video
  - Gunakan resolusi sesuai (misal 720p utk web, bukan 4k)
  - Gunakan __format efisien__: 'Mp4 (H.264)' atau 'WebM (VP9/AV1)'
  - Streaming dari CDN atau layanan pihak ketiga (YouTube, VImeo) kalau file besar
  - Contoh embed Youtube dengan Lazy Load:
  ```
  <iframe width="560" height="315"
    src="https://www.youtube.com/embed/xxxxxxxx"
    loading-"lazy">
  </iframe>
  ```

---

### 3. Optimasi Audio
  - Gunakan __format terkompresi__: 'MP3', 'AAC', 'OGG
  - Jika utk musik streaming, bisa pakai __Bitrate Adaptif__ (misal 128kbps - 320kbps)
  - Jangan auto-play kecuali penting -> hemat Bandwith & UX lebih baik

---

### 4. Caching & CDN
  - __Caching__: Browser simpan file supaya tidak download ulang.
  - __CDN__: Distribusikan file ke Server terdekat agar lebih cepat diakses

---

### Compress Sebelum Upload
Gunakan tool seperti:
  - TinyPNG untuk gambar
  - FFmpeg untuk audio/video
  -Plugin build (Webpack, vite, Gulp) -> otomatis kompres saat deploy