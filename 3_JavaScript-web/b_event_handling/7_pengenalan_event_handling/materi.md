### 1. Apa itu Event?
Event adalah __kejadian (aksi)__ yg terjadi di browser, baik dari __user__ maupun dari __sistem__.
Contoh event:
  * __User Action__ -> Klik tombol, mengetik di input, menggerakan mouse, menekan keyboard.
  * __Browser/System__ Event -> Halaman selesai dimuat (DOMContentLoaded), resize jendela, error, dll.

---

### 2. Cara Menangani Event
Ada beberapa acara untuk menangani event di JavaScript: <br>
  ##### a. Inline HTML Attribute
    Menulis langsung di tag HTML <br>
    ```
    <button onclick="alert('Tombol diklik!')">Klik Saya</button>
    ```
  ##### b. DOM Property
    Menetapkan fungsi ke properti event dari elemen <br>
    ```
    <button id="btn">Klik Saya</button>
    <script>
      const btn = document.getElementById("btn");
      
      btn.onclick = function() {
        alert("Tombol diklik!");
      };
    </script>
    ```
  ##### c. addEventListener
    Lebih fleksibel karena bisa menambahkan lebih dari satu event handler <br>
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
  * __Mouse Event__ -> click, dblclick, mouseover, mouseout, mousemove
  * __Keyboard Event__ -> keydown, keyup, keypress
  * __Form Event__ -> submit, change, focus, blur, input
  * __Window/Document Event__ -> load, DOMContentLoaded, resize, scroll

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