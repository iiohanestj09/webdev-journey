//? 2. Validasi HTML5 -> Gunakan 'pattern' & HTML5 Validation API
/* HTML5 sudah menyediakan cara validasi otomatis tanpa perlu banyak JS. Kita bisa pakai atribut:
  - required  -> wajib diisi
  - type="email" / type="number" -> validasi otomatis
  - pattern  -> regex custom
  - min, max, minlength, maxlength  -> aturan angka/panjang */
const form2 = document.getElementById("form2");
form2.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form2.checkValidity()) {
    // default error browser tetap muncul
    console.log("Form Tidak valid");
  }

  //& .checkValidity() mengembalikan true jika semua aturan HTML5 valid. 
  //& Ada juga reportValidity() -> menampilkan pesan error bawaan browser

  // Kirim data ke Server:
  // form3.submit();  -> bakal reload
  // Pakai fetch/ajax  ==> Nanti di materi kedepannya

  alert("Form2 berhasil dikirim!");
  const dataY = new FormData(form2);
  console.log("2. Username:", dataY.get("username"));
  console.log("2. Email:", dataY.get("email"));
  console.log("2. Age:", dataY.get("age"));
});