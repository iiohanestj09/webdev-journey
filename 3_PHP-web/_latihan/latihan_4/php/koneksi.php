<?php 
$host = "localhost";
$user = "root";
$password = "";
$database = "db_form";

// Membuat Koneksi
$conn = new mysqli($host, $user, $password, $database);

// Cek Koneksi
if ($conn->connect_error) {
    die("Koneksi Gagal: " .$conn->connect_error);
}
?>