/* 1. .remove()
  - Menghapus elemen itu sendiri langsung dari DOM
  - Dipanggil pada elemen yg ingin dihapus */ 
const hapus = document.getElementById("hapus");
hapus.remove();   // Sisa Item B, C, D


/* 2. .removeChild()
  - Dipanggil dari parent utk menghapus child tertentu
  - Berguna kalau kita sudah pegang parent-nya */
const list = document.getElementById("list");
list.removeChild(list.querySelector("li"));   // Sisa Item C, D


/* 3. .replaceChildren()
  - Menghapus semua anak (children) dari sebuah elemen
  - Bisa juga seklaigus mengganti dgn anak baru */
list.replaceChildren();   // Kosongkan semua anak

list.replaceChildren(Object.assign(document.createElement("li"), { textContent: "Item hasil Replace" }));   // Hapus semua lalu tambahkan yg baru