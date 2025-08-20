// Lanjutan dari Poin 4 di 7_membuat_elemen

/* 1. .appendChild()
  - Menambahkan elemen sebagai ANAK TERAKHIR dari sebuah parent
  - Hanya bisa menerima node (bukan string) */
const list = document.getElementById("list");
const newItem = document.createElement("li");
newItem.textContent = "Item 2";
list.appendChild(newItem);


/* 2. .append()
  - Bisa menambahkan node atau teks langsung
  - Bisa menambahkan lebih dari satu item sekaligus
  - Juga menambahkan sebagai terakhir */
list.append("Teks di atas Item 2", newItem);
list.append(newItem, "Teks di bawah Item 2");


/* 3. .prepend()
  - Menambahkan elemen sebagai ANAK PERTAMA dari parent */
const firstItem = document.createElement("li");
firstItem.textContent = "Item 0";
list.prepend(firstItem);


/* 4. .before() dan .after()
  - Menyisipkan elemen sebelum atau sesudah suatu node tertentu
  - Bisa menerima node atau teks */
const judul = document.getElementById("judul");
const newP1 = document.createElement("p");
newP1.textContent = "Paragraf sebelum judul";
judul.before(newP1);

judul.after(Object.assign(document.createElement("p"), { textContent: "Paragraf Setelah Judul" }));   // Versi singkat, tanpa perlu buat variabel --> Object.assign(target, ...source);


/* 5. .replaceWith()
  - Mengganti elemen lama dengan elemen baru */
judul.replaceWith(Object.assign(document.createElement("h1"), { textContent: "Judul Baru" }));