// 1.1 If-Else
let nilai = parseInt(prompt("Masukkan nilai ujian (0-100):"));
if (nilai >= 90) {
    console.log("Kategori: A");
} else if (nilai >= 80) {
    console.log("Kategori: B");
} else if (nilai >= 70) {
    console.log("Kategori: C");
} else if (nilai >= 60) {
    console.log("Kategori: D");
} else {
    console.log("Kategori: E");
}

// 1.2 Switch Case
let angka = parseInt(prompt("Masukkan angka 1-7:"));
switch (angka) {
    case 1: console.log("Senin"); break;
    case 2: console.log("Selasa"); break;
    case 3: console.log("Rabu"); break;
    case 4: console.log("Kamis"); break;
    case 5: console.log("Jumat"); break;
    case 6: console.log("Sabtu"); break;
    case 7: console.log("Minggu"); break;
    default: console.log("Input tidak dikenal");
}

// 1.3 Ternary Operator
let usia = parseInt(prompt("Masukkan usia:"));
let hasil = usia >= 17 ? "Boleh membuat KTP" : "Belum boleh membuat KTP";
console.log(hasil);
