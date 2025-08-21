// 5. Iterasi Child
const containHTMLCol = document.getElementById("container").children;
const containNodeList = document.getElementById("container").childNodes;

// A. HTMLCollection tidak bisa menggunakan .forEach secara langsung. Untuk iterasi nya:
  // Cara 1
Array.from(containHTMLCol).forEach(child => {
  console.log(child.textContent);
});
console.log("-".repeat(40));

  // Cara 2
for (let child of containHTMLCol) {
  console.log(child.textContent);
}
console.log("-".repeat(40));


// B. NodeList bisa langsung .forEach
containNodeList.forEach(child => {
  console.log(child.textContent);
})


//? Memberi style dgn looping
for (let child of containHTMLCol) {
  if (child.tagName === "LI" || child.tagName === "P") child.style.color = "red";
}