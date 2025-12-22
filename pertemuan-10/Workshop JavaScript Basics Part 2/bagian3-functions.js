// 3.1 Function Declaration
function luasPersegi(sisi) {
    return sisi * sisi;
}
console.log("Luas persegi (sisi=4):", luasPersegi(4)); // 16

// 3.2 Function Expression
const greet = function(nama) {
    return `Halo, ${nama}! Selamat datang.`;
};
console.log(greet("Muhamad"));

// 3.3 Arrow Function
const jumlah = (a, b) => a + b;
console.log("Jumlah 5 + 7 =", jumlah(5, 7)); // 12

// 3.4 Default Parameter & Rest Parameter
function salam(nama = "Mahasiswa") {
     console.log(`Selamat datang, ${nama}!`);
}
salam();            // menggunakan default
salam("Andi");      // menggunakan parameter

function jumlahSemua(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}
console.log("Jumlah semua angka:", jumlahSemua(1, 2, 3, 4, 5)); // 15