# 1. Definisi DOM
  * DOM (Document Object Model) adalah __representasi dokumen HTML__ dalam bentuk struktur pohon (tree stricture) yg bisa dimanipulasi menggunakan JS.
  * Menghubungkan konten HTML dengan JavaScript sehingga bisa JS bisa membaca dan mengubah elemen, atribut, dan style.
  * Dikelola oleh browser, bukan bagian dari core JS -> artinya DOM API hanya ada di environment browser, bukan di Node.js (kecuali pakai library seperti JSDOM).

---

# 2. Hubungan HTML -> DOM
  * Saat browser memuat HTML:
    - HTML di-_parse_ menjadi __DOM Tree__.
    - CSS di-_parse_ menjadi __CSSOM__.
    - DOM + CSSOM digabung menjadi __Render Tree__ utk ditampilkan di layar.
  * Perubahan di DOM akan langsung mempengaruhi tampilan halaman (_reflow_ dan _repaint_).

---

# 3. Struktur DOM
  * __dokumen__ adalah node akar (root node)
  * Tipe node utama:
    - __Elemen Node__ (tag HTML seperti 'div', 'p', 'a').
    - __Attribute Node__ (atribut seperti id, class, src).
    - __Text Node__ (isi teks di dalam elemen).
    - __Comment Node__ (<!--komentar-->)
  * Hubungan antar node:
    - _Parent_ (induk)
    - _Child_ (anak)
    - _Sibling_ (saudara)

---

# 4. Representasi DOM dalam Bentuk Tree
  * Contoh HTML:
    <html>
      <head>
        <title>Contoh DOM</title>
      </head>
      <body>
        <h1>Hello DOM</h1>
        <p>Belajar Document Object Model</p>
      </body>
    </html>
  
  * Struktur DOM Tree:
    Document
      └── html
            ├── head
            │    └── title
            │         └── "Contoh DOM"
            └── body
                  ├── h1
                  │    └── "Hello DOM"
                  └── p
                      └── "Belajar Document Object Model"

---

# 5. Objek Utama dalam DOM
  * window -> Objek global browser (Mencakup semua: DOM, location, history, dll).
  * document -> representasi dari halaman HTML (root DOM tree).
  * Elemen Object -> Setiap tag HTML direpresentasikan sebagai objek.

---

# 6. Kenapa DOM Penting untuk Js-Web
  * Memungkinkan JS:
    - Mengambil dan mengubah teks, HTML, atribut.
    - Mengubah style CSS secara dinamis.
    - Menambahkan/menghapus elemen.
    - Menangani event (click, input, submit).
  * Tanpa DOM, halaman web hanya akan statis.