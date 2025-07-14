// Ini adalah comment di JavaScript

//* 1. Variable dengan let
let nama = "Ucup Surucup";

console.log(nama);

nama ="Otong Surotong";
console.log(nama);

//* 2. Variabel dengan Var
var namaDepan = "Ucup";
console.log(namaDepan);

namaDepan = "Otong";
console.log(namaDepan);


// Kelakuan dari let
let namaBelakang = "Surucup";
{
    let namaBelakang = "Surotong";
    console.log(namaBelakang);
}
console.log(namaBelakang);


// Kelakuan dari var
var namaTengah = "Keren";
{
    var namaTengah = "Ganteng";
    console.log(namaTengah);
}
console.log(namaTengah);

// Kelakuan let akan tergantung dari scope nya, sedangak var ini global dimanapun dia berada
// Ketika var berada di dalam maupun di luar, dia akan tetap merubah nilai parent, bahkan mendeklarasi variabel baru, kayak baris 31 --> Overwrite. var ini akan mengambil code paling bawah yang dieksekusi, jadi antara 29 dan 31, dia akan mengeksekusi baris yang 31


//* Kasus khusus tanpa keyword == var
gorengan = "Bala-bala";
{
    gorengan = "Combro";
    console.log(gorengan);
}
console.log(gorengan);

// Variabel tanpa let/var/const, akan default sebagai 'var'


//* 3. const
const TTL = "10 Maret 2022";          //! nama variabel yang KAPITAL dpt mempermudah baca kalau itu const
console.log(TTL);
// TTL = "11 Maret 2054";          akan error, karena sudah ada inisialisasi variabel konstan, yang artinya data tersebut tidak dapat diubah/manipulasi