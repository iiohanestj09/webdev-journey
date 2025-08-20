/* 1. .cloneNode(deep)
Parameter deep:
  - false : hanya menyalin elemen tanpa anak (shallow copy)
  - true  : menyalin elemen beserta seluruh anak-anaknya (deep copy) */


// 2. Contoh: Clone Tanpa Anak
const asli = document.getElementById("asli");
const clone1 = asli.cloneNode(false);  // hanya div kosong
document.getElementById("container").appendChild(clone1);
console.log(asli);    // <div id="asli">...</div>
console.log(clone1);   // <div id="asli"></div>


// 3. Contoh: Clone Beserta Anak (Deep Copy)
const clone2 = asli.cloneNode(true);  // termasuk semua child
document.getElementById("container").appendChild(clone2);
console.log(clone1);
console.log(clone2);


/* 4. Menyalin Lalu Modifikasi
Clone bisa juga dimodifikasi sebelum ditambahkan ke DOM */
const clone4 = asli.cloneNode(true);
clone4.querySelector("p").textContent = "Paragraf Baru dari Clone";
document.getElementById("container").appendChild(clone4);


/* 5. Menghindari Duplikasi Id 
Klaau elemen yg di-clone punya 'id', HASIL CLONE AKAN PUNYA ID YANG SAMA.
Hal ini bisa menyebabkan bug. Jadi, setelah cloning biasanya ganti id-nya. */
const clone3 = asli.cloneNode(true);
clone3.id = "salinan";    // ubah id
document.getElementById("container").appendChild(clone3);

// NOTES: dengan .cloneNode(true) kita menyalin Id-Id dari Child JUGA, sehingga ini menjadi konflik. Jadi harus cermat penaruhan Id di HTML