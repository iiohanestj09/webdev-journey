// 1. Menetapkan style
const text = document.getElementById("text");
text.style.color = "blue";
text.style.fontSize = "30px";
text.style.backgroundColor = "yellow";


// 2. Membaca style
console.log(text.style);              // Keseluruhan style
console.log(text.style.marginLeft);   // Hasil dari style inline di HTML
console.log(text.style.color);        // Hasil dari manipulasi di JS
console.log(text.style.fontFamily);   // Jika tidak dimanipulasi, maka akan '' atau kosong
console.log(window.getComputedStyle(text).paddingTop);  // Mengambil style dari CSS, winwdow.getComputedStyle()
console.log(window.getComputedStyle(document.getElementsByClassName("coba")[0]).color);   // colornya akan berbentuk rgb(x,y,z);


// 3. Menghapus style
text.style.color = '';    // Mengikuti defaultnya, hitam


// 4. Banyak style sekaligus 
//! NOTES: bakal reset style seluruh dan menimpa dgn value yg diberi
text.style.cssText = "color: green; font-size: 40px; background-color: pink; padding-left: 20px;";  