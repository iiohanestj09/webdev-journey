/* 2. Child Node
Untuk mengakses Anak dari Induk
  - .children  -> HTMLCollection dari Anak Elemen (tidak termasuk text/comment)
  - .firstElementChild  -> Anak elemen Pertama
  - .lastElementChild  -> Anak elemen Terakhir
  - .childNodes  -> semua Node (Elemen + text + Comment) */
const parent = document.getElementById("parent");

console.log(parent.children);         // parent -> children {HTMLCollection}
console.log(parent.children[0]);      // parent -> children[0]: ol#child1
console.log(parent.children[1]);      // parent -> children[1]: h4#child2
console.log("Jumlah anak dari 'parent':", parent.children.length);

console.log("-".repeat(40));

console.log(parent.childNodes);       // parent -> children {NodeList}
console.log(parent.childNodes[0]);    // parent -> nodes1: whitespace
console.log(parent.childNodes[1]);    // parent -> nodes2: comment (baris 10)
console.log(parent.childNodes[2]);    // parent -> nodes3: ol#child1

console.log("-".repeat(40));

console.log(parent.firstElementChild); // parent -> children[0]: ol#child1
console.log(parent.lastElementChild);  // parent -> children[0]: p#child3

console.log("-".repeat(40));

console.log(parent.children[0].children);   // parent -> children[0]: child1 -> children {HTMLCollection}  
console.log("Jumlah anak dari 'child1':", parent.children[0].children.length);
console.log(parent.children[0].firstElementChild.innerHTML);  // parent -> children[0]: child1 -> children[0]: child1A.innerHTML
console.log(parent.children[0].lastElementChild);   // parent -> children[0]: child1 -> child1D