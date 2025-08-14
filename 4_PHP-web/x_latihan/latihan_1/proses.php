<?php

$data = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari form input
    $nama = htmlspecialchars($_POST['nama']);
    $usia = htmlspecialchars($_POST['usia']);
    $jenis_kelamin = htmlspecialchars($_POST['jenis_kelamin']);
    $tanggal = htmlspecialchars($_POST['tanggal']);

    // Simpan data ke variabel
    $data[] = [
        'nama' => $nama,
        'usia' => $usia,
        'jenis_kelamin' => $jenis_kelamin,
        'tanggal' => $tanggal
    ];
}

// Tampilkan data ke tabel
if(empty($data)) {
    echo "<tr><td colspan='5'>Belum Ada Data.</td></tr>";
} else{
    $no = 1;
    foreach($data as $row) {
        echo "<tr>";
        echo "<td>" . $no++ . "</td>";
        echo "<td>" . htmlspecialchars($row['nama']) . "</td>";
        echo "<td>" . htmlspecialchars($row['usia']) . "</td>";
        echo "<td>" . htmlspecialchars($row['jenis_kelamin']) . "</td>";
        echo "<td>" . htmlspecialchars($row['tanggal']) . "</td>";
        echo "</tr>";
    }
}
?>
