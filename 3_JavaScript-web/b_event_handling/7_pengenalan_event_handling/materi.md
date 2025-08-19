### 1. Apa itu Event?
Event adalah __kejadian (aksi)__ yg terjadi di browser, baik dari __user__ maupun dari __sistem__.
Contoh event:
  * User Action -> Klik tombol, mengetik di input, menggerakan mouse, menekan keyboard.
  * Browser/System Event -> Halaman selesai dimuat (DOMContentLoaded), resize jendela, error, dll.

---

### 2. Cara Menangani Event
Ada beberapa acara untuk menangani event di JavaScript:
  a. Inline HTML Attribute
    Menulis langsung di tag HTML
    ```
    <button onclick="alert('Tombol diklik!')">Klik Saya</button>
    ```
  b. DOM Property
    Menetapkan fungsi ke properti event dari elemen
    ```
    <button id="btn">Klik Saya</button>
    <script>
      const btn = document.getElementById("btn");
      btn.onclick = function() {
        alert("Tombol diklik!");
      };
    </script>
    ```
  c. addEventListener
    Lebih fleksibel karena bisa menambahkan lebih dari satu event handler
    ```
    <button id="btn">Klik Saya</button>
    <script>
      const btn = document.getElementById("btn");
      
      btn.addEventListener("click", function() {
        alert("Tombol diklik!");
      });

      // Bisa ditambah handler lain
      btn.addEventListener("click", function() {
        console.log("Handler kedua jalan.");
      });
    </script>
    ```

---

### 3. Jenis Event yang Umum Dipakai
  * Mouse Event -> click, dblclick, mouseover, mouseout, mousemove
  * Keyboard Event -> keydown, keyup, keypress
  * Form Event -> submit, change, focus, blur, input
  * Window/Document Event -> load, DOMContentLoaded, resize, scroll

---

### 4. Objek Event
Saat event terjadi, handler bisa menerima parameter event yang berisi informasi detail:
  ```
  <input type="text" id="nama" placeholder="Ketik sesuatu...">
  <script>
    const input = document.getElementById("nama");

    input.addEventListener("keydown", function(e) {
      console.log("Key ditekan: ", e.key);
      console.log("Kode tombol: ", e.code);
    })
  </script>
  ```

---

### 5. Menghapus Event Listener
Jika sudah tidak dibutuhkan, event listener bisa dihapus dengan removeEventListener.
  ```
  function halo() {
    alert("Halo!");
  }

  btn.addEventListener("click", halo);
  btn.removeEventListener("click", halo);
  ```