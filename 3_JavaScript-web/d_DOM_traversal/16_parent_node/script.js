/* DOM Traversal (Menjelajah DOM)
artinya menjelajahi struktur DOM (Document Object Model), dari elemen satu ke elemen lain:
  - Naik ke Parent (Atas)
  - Turun ke Children (Bawah)
  - Menyamping ke Sibling (Sebelah)
  - Atau mencari berdasarkan Selector tertentu */


/* 1. Parent Node
Digunakan untuk naik ke Elemen Induk
  - .parentNode  -> bisa mengembalikkan Parent berupa Element, Text node, atau Comment 
  - .parentElement  -> khusus mengembalikkan Parent berupa Element (lebih sering dipakai) */
const child1Aa = document.getElementById("child1Aa");

console.log(child1Aa.parentNode);     // child1Aa -> child1A
console.log(child1Aa.parentElement);
console.log(child1Aa.parentElement.innerHTML);  

console.log(child1Aa.parentElement.parentElement);  // child1Aa -> child1A -> child1


console.log(child1Aa.parentElement.parentElement.parentElement.innerHTML);    // child1Aa -> child1A -> child1 -> parent
console.log(child1Aa.parentElement.parentElement.parentElement);
console.log(child1Aa.parentElement.parentElement.parentElement.textContent);
