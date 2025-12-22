// 3.1 Deklarasi Variabel
let nama = "Edo";
const umur = 21;
let isStudent = true;

console.log("Nama:", nama);
console.log("Umur:", umur);
console.log("Apakah mahasiswa?", isStudent);

// 3.2 Identifiers (perbaikan variabel)
let nama1 = "Benar";        // tidak boleh diawali angka
let nilai = 10;             // tidak boleh pakai keyword 'let'
let Nama = "Benar tetapi berbeda"; // case-sensitive, berbeda dengan 'nama'

console.log("nama1:", nama1);
console.log("nilai:", nilai);
console.log("Nama:", Nama);

// 3.3 Data Types
let mahasiswa = { nama: "Edo", prodi: "TI" };
let hobi = ["coding", "game", "olahraga"];

// Tampilkan semua data dengan console.table()
console.table({ nama, umur, isStudent, nama1, nilai, Nama, mahasiswa, hobi });