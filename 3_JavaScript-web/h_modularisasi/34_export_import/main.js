import { tambah, kali } from "./catatan.js";

console.log(tambah(2, 3));
console.log(kali(4, 5));

import greet from "./catatan.js";
console.log(greet("Putra"));    // Tidak pakai {} saat import default

/* 5. Dynamic Import
Kadang kita butuh import hanya ketika diperlukan -> pakai import()  */
async function loadMath() {
  const math = await import("./catatan.js");
  console.log(math.tambah(3, 4));
}

loadMath();