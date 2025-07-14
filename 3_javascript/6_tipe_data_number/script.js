// Number - 64 bit, -2^1024 sampai 2^1024

let nilaiInt = 10;
let nilaiFloat = 10.123;
let nilaiBigInt = 12345678901234567890123456n; // Ada Tambahan 'n' dibelakang, maka akan masuk ke dalam tipe bigint
console.log(typeof nilaiBigInt);

// Menggunakan Data ini bagaimana?

let angka1 = 5.678;
console.log(parseInt(angka1));
console.log(parseFloat(angka1));

let angka2 = 10;
console.log(parseInt(angka2));
console.log(parseFloat(angka2));

// Merubah String ke Number

let data = "10.98";
console.log(data + 777);

console.log(parseInt(data) + 0.7);
console.log(parseFloat(data) + 7);

// Contoh
let inputPembelian = "10000";
let pajak = 0.15;
let pembelian = parseInt(inputPembelian);
let bayar = pembelian + (pembelian * pajak);
console.log(bayar);





