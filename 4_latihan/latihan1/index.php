<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modul 1: Tugas</title>
</head>
<body>
    <h1>Formulir Input Data dan Tabel</h1>
    <form action="index.php" method="post">
        Nama: <input type="text" name="nama"> <br><br>
        Usia: <input type="number" name="usia"> <br><br>

        Jenis Kelamin:
        <select name="jenis_kelamin">
            <option value="laki_laki">Laki-laki</option>
            <option value="perempuan">Perempuan</option>
        </select> <br><br>

        Tanggal:
        <input type="date" id="tanggal" name="tanggal"> <br><br>

        <input type="submit" value="Tambahkan Data">
    </form>

    <h2>Data Tersimpan</h2>
    <table border="2" id="dataTable">
        <thead>
            <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Usia</th>
                <th>Jenis Kelamin</th>
                <th>Tanggal</th>
            </tr>
        </thead>
        <tbody>
            <?php include 'proses.php'; ?>
        </tbody>
    </table>
</body>
</html>
