//? Paginatin (Halaman Bertahap)
/* Pagination adalah teknik utk membagi data besar menjadi beberapa halaman, sehingga pengguna bisa pindah halaman atau klik Load More  */

let page = 1;   // mulai dari halaman 1
async function loadUsers() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3`);
  const data = await res.json();

  const listEl = document.getElementById("user-list");
  data.forEach(user => {
    const div = document.createElement("div");
    div.textContent = user.name;
    listEl.appendChild(div);
  });
}

document.getElementById("load-more").addEventListener("click", () => {
  page++;
  loadUsers();
})

// load pertama
loadUsers();