//? 3. Menampilkan Pesan Error Dinamis
// Kalau mau lebih custom (pesan error sendiri, bukan default browser), kita bisa gunakan setCustomValidity() atau membuat pesan manual.

const form3 = document.getElementById("form3");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");

const errorUsername = document.getElementById("error-username");
const errorEmail = document.getElementById("error-email");
const errorAge = document.getElementById("error-age");

form3.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;
  errorUsername.textContent = "";
  errorEmail.textContent = "";
  errorAge.textContent = "";

  if (usernameInput.value.trim().length < 3) {
    errorUsername.textContent = "Username minimal 3 karakter (tanpa spasi berlebih)!";
    isValid = false;
  }

  if (!emailInput.checkValidity()) {
    errorEmail.textContent = "Email Tidak Valid!";
    isValid = false;
  }

  if (!ageInput.checkValidity()) {
    errorAge.textContent = "Umur tidak boleh lebih kecil dari 1!";
    isValid = false;
  }

  if (!isValid) return;
  // Submit data ke server:
  // form3.submit();  -> bakal reload
  // Pakai fetch/ajax  ==> Nanti di materi kedepannya

  alert("Form3 berhasil dikirim!");
  const dataZ = new FormData(form3);
  console.log("3. Username:", dataZ.get("username"));
  console.log("3. Email:", dataZ.get("email"));
  console.log("3. Age:", dataZ.get("age"));
});