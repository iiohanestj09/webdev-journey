const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  alert("Tombol ditekan!");
});

btn.addEventListener("click", function() {
  console.log("Handler kedua jalan.");
});

const input = document.getElementById("nama");

input.addEventListener("keydown", function(e) {
  console.log("Key ditekan:", e.key);
  console.log("Kode tombol: ", e.code);
});