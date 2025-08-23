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
  * Gunakan resolusi sesuai (misal 720p utk web, bukan 4k) 
  * Gunakan __format efisien__ MP4 (H.254 / AAC):
    + Kelebihan:
      - Paling populer & universal -> didukung hampir semua browser, OS, device
      - Kualitas bagus dengan ukuran relatif kecil
      - Bisa diputar dengan ukuran relatif kecil
    + Kekurangan:
      - Kompresi tidak seefisien format baru (misalnya AV1)
      - Kadang ukuran file lebih besar daripada WebM
      - Note: Selalu sediakan sebagai fallback (karena aman & universal) 
  * Gunakan __format efisien__ WebM (VP8 / VP9 / Av1 + Vorbis/Orpus)
    + Kelebihan:
      - Format open-source (tanpa lisensi seperti H.264)
      - Lebih efisien -> ukuran file lebih kecil dengan kualitas setara MP4
      - Bagus untuk streaming web (Youtube banyak pakai VP9/WebM)
      - Note: Tambahkan untuk browser modern (hemat bandwith, performa lebih baik)
    + Kekurangan:
      - Support __lebih terbatas__ di browser lama & beberapa device (misalnya Safari baru-baru ini mendukung, tapi tidak sekuat Chrome/Firefox)
      - Tidak seu-universal MP4 kalau dibuka di aplikasi offline
  * Cara Penggunaan:
    ```
    <video controls width="640">
      <source src="video.mp4" type="video/mp4">
      <source src="video.webm" type="video/webm">
      Browser Anda tidak mendukung video HTML5
    </video>
    ```
  * Streaming dari CDN atau layanan pihak ketiga (YouTube, VImeo) kalau file besar
  * Contoh embed Youtube dengan Lazy Load:
  ```
  <iframe width="560" height="315"
    src="https://www.youtube.com/embed/xxxxxxxx"
    loading-"lazy">
  </iframe>
  ```

---

### 3. Optimasi Audio
  * Gunakan __format terkompresi__: 'MP3', 'AAC', 'OGG
  * Jika utk musik streaming, bisa pakai __Bitrate Adaptif__ (misal 128kbps - 320kbps)
  * Jangan auto-play kecuali penting -> hemat Bandwith & UX lebih baik

---

### 4. Caching & CDN
  * __Caching__: Browser simpan file supaya tidak download ulang.
  * __CDN__: Distribusikan file ke Server terdekat agar lebih cepat diakses

---

### Compress Sebelum Upload
Gunakan tool seperti:
  * TinyPNG untuk gambar
  * FFmpeg untuk audio/video
  * Plugin build (Webpack, vite, Gulp) -> otomatis kompres saat deploy