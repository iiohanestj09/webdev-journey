/* .closest() & .matches()
Untuk mencari elemen dgn Selector CSS
  - .closest(selector)  -> Mencari PARENT Terdekat yg cocok dengan Selector
  - .matches(selector)  -> Mengecek apakah Elemen cocok dengan Selector */
const pB = document.getElementById("pB");

console.log(pB.closest(".card"));
console.log(pB.closest(".content"));
console.log(pB.matches("p#pB"));      // true
console.log(pB.matches(".content"));  // false
