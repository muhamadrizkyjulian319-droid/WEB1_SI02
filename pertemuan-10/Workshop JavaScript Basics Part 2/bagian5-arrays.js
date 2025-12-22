// 5.1 Membuat Array
let buah = ["apel", "mangga", "pisang"];
console.log("Elemen pertama:", buah[0]);       // apel
console.log("Panjang array:", buah.length);    // 3

// 5.2 Menambah Elemen
buah.push("jeruk");                            // tambah dengan push()
buah[buah.length] = "anggur";                  // tambah dengan buah[buah.length]
console.log("Setelah ditambah:", buah);

// 5.3 Looping Array
console.log("Looping array buah:");
for (let i = 0; i < buah.length; i++) {
    console.log(buah[i]);
}

// 5.4 Array toString
console.log("Array dalam bentuk string:", buah.toString());

// 5.5 Array Berisi Berbagai Tipe
let campuran = [
    "teks", 
    123, 
    true, 
    { nama: "objek", nilai: 10 }, 
    [1, 2, 3]
];
console.log("Array campuran:", campuran);