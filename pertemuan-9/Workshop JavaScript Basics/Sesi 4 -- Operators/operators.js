// 4.1 Arithmetic
let x = 10;
let y = 3;

console.log("x + y =", x + y);
console.log("x - y =", x - y);
console.log("x * y =", x * y);
console.log("x / y =", x / y);
console.log("x % y =", x % y);

// 4.2 Assignment
let a = 10;
a += 5;   // tambah 5
a -= 2;   // kurang 2
console.log("Nilai a setelah operasi assignment:", a);

// 4.3 Comparison
let p = 5;
console.log("p == 5 :", p == 5);       // true
console.log("p === '5' :", p === "5"); // false (tipe berbeda)
console.log("p != 10 :", p != 10);     // true
console.log("p > 8 :", p > 8);         // false

// 4.4 Logical
let usia = 20;
let punyaKTP = true;

console.log("usia >= 18 && punyaKTP :", usia >= 18 && punyaKTP); // true
console.log("usia < 18 || punyaKTP :", usia < 18 || punyaKTP);   // true
console.log("!punyaKTP :", !punyaKTP);                           // false

// Tugas: Logika pengecekan izin mengendarai motor
// Syarat: usia >= 17 DAN punya SIM
let punyaSIM = true;

if (usia >= 17 && punyaSIM) {
    console.log("Boleh mengendarai motor.");
} else {
    console.log("Tidak boleh mengendarai motor.");
}