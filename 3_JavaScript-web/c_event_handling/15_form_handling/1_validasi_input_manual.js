//? 1. Validasi Input Manual
/* Form HTML biasanya secara default akan Reload Halaman saat Submit.
Agar bisa diproses sendiri di JS, gunakan event submit + e.pereventDefault()  */

// Kita bisa melakukan validasi sebelum form Benar-Benar Dikirim
const form1 = document.getElementById("form1");
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const dataX = new FormData(form1);
  
  // A. Cek Kosong
  const username = dataX.get("username").trim();
  if (username === "") {
    alert("Username tidak boleh kosong!");
    return;   // Menghentikan ekseksui fungsi lebih lanjut
    
  }

  // B. Validasi Email
  const email = dataX.get("email").trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  /* emailPattern ini berupa Regex
  - ^  => awal string
  - [^\s@]  => Satu atau lebih karakter yg bukan spasi(\s) dan bukan @
  - @  => simbol pemisah username dan domain
  - \.  => Titik literal (pemisah domain dan ekstensi)
  - $  => akhir string
  ==> username@domain.ekstensi */
  if (!emailPattern.test(email)) {    // sebuah Regex tidak bisa dibandingkan dgn string pakai ===, mesti pakai .test()
    alert("Email tidak valid!");
    return;
  }

  // C. Validasi Angka
  const age = dataX.get("age");
  if (isNaN(age)) {
    alert("Umur harus berupa angka!");
    return;
  } else if (Number(age) === 0) {
    alert("Umur tidak bisa 0");
    return;
  } else if(age < 0) {
    alert("Umur tidak boleh negatif");
    return;
  }

  // D. Validasi Panjang Teks
  if (username.length < 3 || username.length > 15) {
    alert("Username harus 3-15 karakter");
    return;
  }

  // Kirim data ke Server:
  // Submit manual, karena di awal (baris 8) kita pakai e.preventDefault, itu selalu menghentikan perilaku default form(yaitu reload + SUBMIT KE SERVER)

  // form3.submit();  -> tapi bakal reload
  // Pakai fetch/ajax  ==> Nanti di materi kedepannya
  
  console.log("1. Username:", dataX.get("username"));
  console.log("1. Email:", dataX.get("email"));
  console.log("1. Age:", dataX.get("age"));
  alert("Form1 berhasil dikirim");
});