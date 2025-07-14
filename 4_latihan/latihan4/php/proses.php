<?php
include 'koneksi.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Mengambil data dari formulir
    $nama = trim($_POST['nama']);
    $nis = trim($_POST['nis']);
    $kelas = trim($_POST['kelas']);
    $tanggal = trim($_POST['tanggal']);
    $alamat = trim($_POST['alamat']);
    $nomor = trim($_POST['nomor']);
    

    // Validasi input
    if (empty($nama) || empty($nis) || empty($kelas) || empty($tanggal) || empty($alamat) || empty($nomor)) {
        exit; 
    }

    // Query untuk menyimpan data
    $sql = "INSERT INTO tb_dataForm (nama, nis, kelas, tanggal, alamat, nomor) VALUES ('$nama', '$nis', '$kelas', '$tanggal', '$alamat', '$nomor')";

    // Menyimpan data ke database
    $conn->query($sql);

    // Tutup koneksi database
    $conn->close();
}
?>
