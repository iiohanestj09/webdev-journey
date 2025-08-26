## Apa itu Reflow & Repaint?
### 1. Reflow (Layouting)
Terjadi saat struktur DOM atau CSS berubah, sehingga browser harus __menghitung ulang tata letak__. <br>
Contoh:
  ```
  element.style.width = "500px";
  element.style.margin = "20px";
  ```
Browser harus hitung ulang posisi semua elemen terkait.

### 2. Repaint
Terjadi saat __penampilan (appearance)__ berubah, jadi __layout tidak berubah__.
Contoh:
  ```
  element.style.backgroundColor = "red";
  ```
Hanya butuh menggambar ulang warna, tidak hitung ulang layout.
> reflow lebih berat daripada repaint, karena melibatkan perhitungan posisi & ukuran.

---

## Cara mengurangi Reflow/Repaint
### 1. Gunakan 'classList' daripada ubah style berkali-kali
❌ Buruk:
```
box.style.width = "200px";
box.style.height = "200px";
box.style.background = "blue";
```

✅ Lebih baik:
```
box.classList.add("big-blue-box");
```
Definisiakn semua di CSS -> satu kali reflow.

---

### 2. Gabungkan Perubahan DOM
❌ Buruk:
```
const list = document.getElementById("list");
for (let i = 0; i < 100; i++) {
  const li = document.createElement("li");
  li.textContent = "Item " + i;
  list.appendChild(li);   // 100x reflow
}
```

✅ Lebih baik (pakai fragment):
```
const list = document.getElementById("list");
const fraf = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const li = document.createElement("li");
  li.textContent = "Item " + i;
  frag.appendChild(li);
}
list.appendChild(frag);   // 1x reflow
```

---

### 3. Hindari layout thrashing (baca -> tulis -> baca)
❌ Buruk:
```
box.style.width = box.offsetWidth + 10 + "px";
box.style.height = box.offsetHeight + 10 + "px";
```
Setiap baca .offsetWidth -> browser paksa reflow

✅ Solusi: cache dulu ukurannya.
```
const width = box.offsetWidth;
const height = box.offsetHeight;

box.style.width = (width + 10) + "px";
box.style.height = (height + 10) + "px";
```

---

### 4. Gunakan position: absloute / fixed utk animasi
  * Animasi dengan top, left, width, height = memicu __reflow__.
  * Animasi dengan transform: translate/scale + opacity = hanya repaint -> lebih ringan, bisa GPU-accelerated.

Contoh lebih optimal:
```
css:
.box {
  transition: transform 0.3s ease;
}

js:
box.style.transform = "translateX(100px)";
```

---

### 5. Batch perubahan dengan requestAnimationFrame
Kalau butuh update DOM di loop:
```
function animate() {
  box.style.left = box.offsetLeft + 5 + "px";
  requestAnimationFrame(animate);
}
animate();
```
Browser optimalkan sinkron dengan refresh rate monitor.