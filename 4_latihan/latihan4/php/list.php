<?php
include 'koneksi.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Peserta Didik</title>
    <link rel="stylesheet" href="../css/table_style.css">
</head>
<body>
    <?php
    // Query untuk Mengambil Data dari Tabel
    $sql = "SELECT * FROM tb_dataForm";
    $result = $conn->query($sql);

    echo "<h2>Data Peserta Didik</h2>";
    echo "
        <table border=1px>
            <tr>
                <th>ID</th>
                <th>Nama Lengkap</th>
                <th>NIS/NISN</th>
                <th>Kelas</th>
                <th>Tanggal Lahir</th>
                <th>Alamat</th>
                <th>Nomor Telepon</th>
            </tr>
        ";
    
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "
                <tr>
                    <td>" . $row['id'] . "</td>
                    <td>" . $row['nama'] . "</td>
                    <td>" . $row['nis'] . "</td>
                    <td>" . $row['kelas'] . "</td>
                    <td>" . $row['tanggal'] . "</td>
                    <td>" . $row['alamat'] . "</td>
                    <td>" . $row['nomor'] . "</td>
                </tr>
            ";
        }
    } else {
        echo "
            <tr>
                <td colspan='7'>Tidak Ada Data Untuk Ditampilkan!</td>
            </tr>
            ";
    }

    echo "</table>";
    $conn->close();
    ?>
</body>
</html>