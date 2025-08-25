//? Menampilkan Data API di Halaman (DOM + AJAX)
/* Tujuan:
  - Mengambil data dari API (pakai fetch())
  - Menampilkan data tersebut ke halaman web
  - Melatih data tersebut ke halaman web  */

/* Ambil data dari API Publik 
Pakai API gratis dari JSONPlaceholder  */
const loadBtn = document.getElementById("loadBtn");
const usersDiv = document.getElementById("users");

loadBtn.addEventListener("click", async () => {
  loadBtn.textContent = "⏳ Sedang memuat...";
  
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("🚩 Gagal mengambil data!");

    const users = await res.json();

    // kosongkan dulu
    usersDiv.innerHtml = "";

    // loop data dan tampilkan
    users.forEach(user => {
      const card = document.createElement("div");
      card.className = "user-card";
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Alamat: ${user.address.city}</p>
      `;
      usersDiv.appendChild(card);
    });
  } catch (err) {
    usersDiv.innerHTML = "❌ Error: " + err.message;
  }
  loadBtn.textContent = "Ambil Data";
});