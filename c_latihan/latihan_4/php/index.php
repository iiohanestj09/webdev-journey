<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../css/styles.css">
  <title>Form</title>
</head>
<body>
  <div id="container">
    <h1 class="header">Form Pengumpulan Data Diri</h1>

    <form id="dataForm">
      <div class="inputs nama">
        <b>Nama Lengkap:</b> <br>
        <input type="text" id="nama" name="nama">
      </div>

      <div class="inputs nis">
        <b>NIS/NISN:</b> <br>
        <input type="text" id="nis" name="nis">
      </div>

      <div class="inputs kelas">
        <b>Kelas:</b> <br>
        <select name="kelas" id="kelas">
          <option value="" disabled selected>Pilih Kelas</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>

      <div class="inputs tanggal">
        <b>Tanggal Lahir:</b> <br>
        <input type="date" id="tanggal-lahir" name="tanggal">
      </div>

      <div class="inputs alamat">
        <b>Alamat:</b> <br>
        <textarea name="alamat" id="alamat" rows="5" cols="30"></textarea>
      </div>

      <div class="inputs nomor">
        <b>Nomor Telepon/HP:</b> <br>
        <input type="text" id="nomor" name="nomor">
      </div>

      <div class="submit-button">
        <button type="submit">Kirim Data</button>
      </div>
    </form>

    <script src="../js/script.js"></script>
    
    <div class="view-button">
    <a href="list.php"><button type="button">Lihat Data</button></a>
    </div>
  </div>
</body>
</html>
