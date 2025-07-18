document.querySelector('button[type="submit"]').addEventListener('click', function (e) {
    e.preventDefault(); // Mencegah reload halaman

    // Ambil nilai input dari form
    let nama = document.getElementById('nama').value.trim();
    let nis = document.getElementById('nis').value.trim();
    let kelas = document.getElementById('kelas').value;
    let tanggal = document.getElementById('tanggal-lahir').value;
    let alamat = document.getElementById('alamat').value.trim();
    let nomor = document.getElementById('nomor').value.trim();

    // Validasi input sebelum kirim
    if (!nama || !nis || !kelas || !tanggal || !alamat || !nomor) {
        alert("Semua Data Wajib Diisi Sebelum Di-Submit!");
        return;
    }

    // Buat objek XMLHttpRequest
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "proses.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Tampilkan alert sukses setelah kirim
    alert("Data Berhasil Disimpan!");

    // Kirim data ke server
    let data = `nama=${encodeURIComponent(nama)}
        &nis=${encodeURIComponent(nis)}
        &kelas=${encodeURIComponent(kelas)}
        &tanggal=${encodeURIComponent(tanggal)}
        &alamat=${encodeURIComponent(alamat)}
        &nomor=${encodeURIComponent(nomor)}`;
    xhr.send(data);
});
