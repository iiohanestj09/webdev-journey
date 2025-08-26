
let page = 1;
let loading = false;

async function loadPosts() {
  if (loading) return; // biar tidak double request
  loading = true;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`);
  const data = await res.json();

  const listEl = document.getElementById("post-list");
  data.forEach(post => {
    const div = document.createElement("div");
    div.setAttribute("style", "padding-bottom: 100px; border: 2px solid black;");
    div.innerHTML = `<h1>${post.title}</h1><h4>${post.body}</h4>`;
    listEl.appendChild(div);
  });

  loading = false;
}

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    page++;
    loadPosts();
  }
});

// load pertama
loadPosts();
