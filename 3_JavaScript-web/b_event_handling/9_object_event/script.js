/* 1. Apa itu Event Object?
  - Event object adalah objek yang berisi informasi detail tentang sebuah event
  - Objek ini otomatos diteruskan sebagai parameter ke dalam fungsi event listener
  - Biasanya ditulis sebagai event atau singkatnya 'e' */ 
document.getElementById("btn").addEventListener("click", function(e) {
  console.log(e);
});


/* 2. Properti Utama Event Object
| Properti            Deskripsi                                       Contoh                            |
  type                Jenis event                                     "click", "keydown", dll
  target              Elemen yg memicu event                          <button id="btn">
  currentTarget       Elemen tempat listener terpasang                sama dgn target, kecuali saat bubli
  timeStamp           Waktu event terjadi (ms sejak page load)        12345
  defaultPrevented    true/false apakah aksi default sudah dicegah    false */


// 3. Method penting pada Event Object
  // A. .preventDefault() -> Mencegah aksi bawaan browser
document.getElementById("link").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Link tidak dibuka");
});

  // B. .stopPropagation() -> Menghentikan bubbling (event tidak naik ke parent)
document.getElementById("parent").addEventListener("click", () => {
  console.log("Klik Parent");
});

document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Klik Child saja");
});

  // C. .stopImmidiatePropagation() -> Menghentikan bubbling dan mencegah listener lain pada elemen yg sama.


// 4. Contoh Praktik
const coba = document.getElementById("coba");
coba.addEventListener("click", (e) => {
  console.log("Tipe event:", e.type);
  console.log("Target:", e.target);
  console.log("Current target:", e.currentTarget);
  console.log("Timestamp:", e.timeStamp);
  console.log("Default prevented?", e.defaultPrevented);
});


/* 5. Catatan
Event Object berbeda-beda tergantung jenis event. Berikut:
  A. Mouse Event:
    + clientX, clientY  -> posisi mouse relatif ke viewport (jendela browser)
    + pageX, pageY  -> posisi mouse relatif ke seluruh dokumen
    + button  -> tombol mouse yg ditekan (0=kiri, 1=tengah, 2=kanan)
    + altKey, ctrlKey, shiftKey, metaKey  -> status tombol modifier

  B. Keyboard Event
    + key  -> huruf/tombol yg ditekan ("a", "Enter", "Backspace")
    + code  -> kode fisik tombol ("KeyA", "Enter")
    + altKey, ctrlKey, shiftKey, metaKey  -> status tombol modifier
    + repeat  -> true jika tombol ditekan terus
  
  C. Clipboard Event
    + clipboardData  -> berisi data yg disalin/ditempel

  D. Input Event
    + inputType  -> jenis perubahan (insertText, deleteContentBackward, dll)
    + data  -> karakter yg dimasukkan (user atau null jika dihapus)
    + isComposing  -> apakah sedang dalam mode IME (misal mengetik bahasa Jepang)

  E. Focus Event
    + relatedTarget  -> elemen yg mendapatkan/kehilangan fokus
  
  F. Form Event
  Umumnya masih berupa Event dasar, tapi sering digunakan dengan .preventDefault() untuk mencegah reload halaman

  G. Touch Event
    + touches  -> daftar semua sentuhan aktif
    + targetTouches  -> daftar sentuhan di elemen target
    + changedTouches  -> daftar sentuhan yg berubah
  
  H. Drag, Wheel, Pointer, Animation/Transition Event.
Artinya, event adalah BASE OBJECT dan utk jenis event tertentu dia punya turunan object properti tambahan
*/