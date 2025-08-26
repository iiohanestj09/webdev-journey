//? Form Submit ke Server Tanpa Reload (AJAX Form)
/* Biasanya, kalau form di-submit pakai <form> biasa, browser akan reload halaman. Dengan AJAX (Fetch API / XMLHttpRequest), kita bisa kirim data ke server tanpa reload  */

const myForm = document.getElementById("myForm");
const statusEl = document.getElementById("status");

myForm.addEventListener("submit", async function (e) {
  e.preventDefault();     // cegah reload default

  statusEl.textContent = "⏳ Mengirim...";

  // Beberapa API hanya menerima JSON, bukan FormData. Maka kita ubah jadi object dulu.
  // Ambil data dari form -> ubah jadi Object -> ubah jadi JSON
  const formData = new FormData(myForm);
  const dataObj = Object.fromEntries(formData.entries());

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(dataObj)   // kirim JSON
    });

    if (!res.ok) throw new Error("Gagal mengirim data!");

    const data = await res.json();
    console.log("JSON Response:", data);

    statusEl.textContent = "✅ Data berhasil dikirim";
  } catch (err) {
    statusEl.textContent = "❌ terjadi kesalahan: " + err.message;
  }
});
/* FormData(myForm) langsung mengambil semua input dalam form
Data dikirm ke server pakai fetch()  */