/* 3. Sibling (Saudara ELemen)
Untuk navigasi ke Elemen Sejajar.
  - .nextElementSibling  -> Elemen Setelahnya
  - .previousElementSibling  -> Elemen Sebelumnya */

const p2 = document.getElementById("p2");

console.log(p2.previousElementSibling);   // p1 < p2 
console.log(p2.nextElementSibling);       // p2 > p3
console.log(p2.nextElementSibling.nextElementSibling);  // p2 > p3 > p4

console.log(p2.nextElementSibling.textContent);