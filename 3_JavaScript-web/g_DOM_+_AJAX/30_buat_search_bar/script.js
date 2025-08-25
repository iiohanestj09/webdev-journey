//? Membuat Pencarian Data (Search Bar) dengan Data API
/*- Awal halaman -> tampil semua user
  - User input di search bar -> list akan difilter hanya yg cocok
  - Pencarian otomatis berjalan setiap ada input  */ 

const searchEl = document.getElementById("search");
const resultsEl = document.getElementById("results");

let users = [];

  // Ambil data user dari API
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    users = data;
    render(users);    // tampilkan semua saat awal
  });

// Fungsi render data ke halaman
function render(dataX) {
  resultsEl.innerHTML = "";
  dataX.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.name} (${user.email})`;
    resultsEl.appendChild(li);
  });
}

// Fitur Search / Filter
// Saat user mengetik di search bar
searchEl.addEventListener("input", function () {
  const keyword = searchEl.value.toLowerCase();
  const filtered = users.filter(user => 
    user.name.toLowerCase().includes(keyword)
  );
  render(filtered);
});