// 1. Escaping String (\' \" \\ \n \t \r \b \f)
let data1 = "Ucup sangat kaget\tmelihat 'hantu' itu";
console.log(data1);

let data2 = 'Otong berkata: "Hello Hell" \nKerennnnnnnn';
console.log(data2);

let data3 = "Maman berkata \"Sangat Asyyiiik\"";
console.log(data3);

// 2. Literal String
let namaDepan = "Ucup";
let namaBelakang = "Surucup";
let tahunLahir = 1999;

let namaLengkap = tahunLahir + "; " + namaDepan + " " + namaBelakang;
console.log(namaLengkap);

// menggunakan `${}` di JavaScript == print(f"") di Python
console.log(`Saya, ${namaDepan} ${namaBelakang}. Tahun Lahir: ${tahunLahir}`);
