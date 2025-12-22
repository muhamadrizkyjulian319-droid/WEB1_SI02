// Mini Project – Daftar Belanja

// Array untuk menyimpan daftar belanja
let daftarBelanja = [];

// Function untuk menambah item
function tambahItem(item) {
    daftarBelanja.push(item);
    console.log(`${item} ditambahkan ke daftar belanja.`);
}

// Function untuk menghapus item
function hapusItem(item) {
    let index = daftarBelanja.indexOf(item);
    if (index !== -1) {
        daftarBelanja.splice(index, 1);
        console.log(`${item} dihapus dari daftar belanja.`);
    } else {
        console.log(`Item "${item}" tidak ditemukan dalam daftar.`);
    }
}

// Function untuk menampilkan seluruh daftar
function tampilkanDaftar() {
    if (daftarBelanja.length === 0) {
        console.log("Daftar belanja kosong.");
    } else {
        console.log("=== Daftar Belanja ===");
        for (let i = 0; i < daftarBelanja.length; i++) {
        console.log(`${i + 1}. ${daftarBelanja[i]}`);
        }
 }
}

// Contoh penggunaan
tambahItem("Beras");
tambahItem("Telur");
tambahItem("Minyak Goreng");

tampilkanDaftar();

hapusItem("Telur");
tampilkanDaftar();

hapusItem("Gula"); // contoh item yang tidak ada