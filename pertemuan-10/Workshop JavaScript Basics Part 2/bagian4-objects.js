// 4.1 Object Literal
const mahasiswa = {
    nama: "Muhamad Rizky Julian",
    nim: "0110125079",
    jurusan: "Sistem Informasi",
    tampilkanData: function() {
        console.log(`Nama: ${this.nama}, NIM: ${this.nim}, Jurusan: ${this.jurusan}`);
    }
};

// Panggil method
mahasiswa.tampilkanData();


// 4.2 new Object()
const mobil = new Object();
mobil.brand = "Toyota";
mobil.tahun = 2022;
mobil.warna = "Hitam";

console.log("Mobil awal:", mobil);


// 4.3 Modifikasi Object
mobil.warna = "Merah";       // ubah warna
mobil.mesin = "2.0L Turbo";  // tambah property baru

console.log("Mobil setelah modifikasi:", mobil);