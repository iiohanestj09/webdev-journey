// Operasi String

// 1. Mencari Char dari sebuah String berdasarkan Indeks .charAt()
let dataString = "abcde";
console.log(`Char Indeks-0: ${dataString.charAt(0)}`);
console.log(`Char Indeks-1: ${dataString.charAt(1)}`);
console.log(`Char Indeks-2: ${dataString.charAt(2)}`);
console.log(`Char Indeks-3: ${dataString.charAt(3)}`);
console.log(`Char Indeks-4: ${dataString.charAt(4)}`);
console.log(`Char Indeks-4: ${dataString.charAt(5)}`);   //! Tidak Error, Kosong.

// 2. Menyambung String .concat()
let namaDepan = "Ucup";
let namaBelakang = "Surucup";

let namaLengkap = namaDepan.concat(' ',namaBelakang, " Si Keren");
console.log(namaLengkap);

// 3. Mengambil Indeks Kemunculan Pertama .indexOf()
console.log(namaLengkap.indexOf('K'));
console.log(namaLengkap.indexOf('c'));
console.log(namaLengkap.indexOf('u'));
console.log(namaLengkap.indexOf('U'));
console.log(namaLengkap.indexOf('z'));  //! Kalau Tidak ada, akan -1

// 4. Mengambil String dalam String menggunakan Indeks .substring() dan .slice()

console.log(namaLengkap.substring(5,12)); //! x,y -> x, x+1, ..., y-1
console.log(namaLengkap.substring(12,5));

console.log(namaLengkap.slice(5,12));
console.log(namaLengkap.slice(12,5));   //! Kosong

// 5. .replace()
namaLengkap = namaLengkap.replace("Ucup Surucup", "Otong Surotong");
console.log(namaLengkap);

//6. Ubah ke Uppercase .toUpperCase()
console.log(namaLengkap.toUpperCase());

// 7. Ubah ke Lowercase .toLowerCase()
console.log(namaLengkap.toLowerCase());

// 8.Merubah Tipe Data String (yang berisi String angka) ke Number, parseInt() dan parseFloat()

let dataString2 = '10';
console.log(typeof dataString2);
console.log(dataString2)

let dataInteger = parseInt(dataString2);
console.log(dataInteger)
console.log(typeof dataInteger);

let dataString3 = "10.125";
let dataFloat = parseFloat(dataString3);
console.log(dataFloat);
console.log(typeof dataFloat);


