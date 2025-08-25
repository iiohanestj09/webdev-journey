/* Tujuan
Saat memanggil API dengan fetch(), kita tidak boleh anggap selalu sukses. Bisa saja:
  - Jaringan error (Offline / Server Down)
  - API balikin status error (404, 500, dll)
  - Data tidak sesuai format

Karena itu kita harus tangani error dan tampilkan 'loading state' biar UX lebih baik  */

/* 1. Struktur Dasar dengan Loading State di UI
Ketika tombol diklik:
  - Awalnya : "Loading..."
  - Jika sukses: "Sukses ambil data!"
  - Jika gagal: "Gagal ambil data!"  */ 
async function getData() {
  try {
    // tampilkan loading state
    document.getElementById("status1").textContent = "Loading...";

    let res = await fetch("https://jsonplaceholder.typicode.com/posts");

    // cek status HTTP
    if (!res.ok) {
      throw new Error(`HTTP Error! Status: ${res.status}`);
    }

    let data = await res.json();
    console.log(data);

    // tampilkan hasil
    document.getElementById("status1").textContent = "Sukses ambil data!";
  } catch (err) {
    console.log("Terjadi error:", err.message);
    document.getElementById("status1").textContent = "Gagal ambil data!";
  }
}


/* 2. Praktik Lebih Real
Biasanya, kita juga menampilkan 'Loading Spinner' atau men-disable tombol agar user tidak klik berkali-kali.  */
const btn = document.getElementById("btn");
const statusEl = document.getElementById("status2");

btn.addEventListener("click", async () => {
  btn.disabled = true;
  statusEl.textContent = "Sedang memuat....";

  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!res.ok) throw new Error("Server error!");


    let data = await res.json();
    statusEl.textContent = `Judul: ${data.title}`;
  } catch (err) {
    statusEl.textContent = "Gagal memuat Data!";
  } finally {
    btn.disabled = false;   // aktifkan lagi tombol
  }
});