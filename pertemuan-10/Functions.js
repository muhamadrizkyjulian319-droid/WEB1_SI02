// Function Declaration 
function luasPersegi(sisi) {
    return sisi * sisi;
}
console.log(luasPersegi(4));


// Function Expression
const greet = function(nama) {
    console.log("Halo, " + nama + "!");
}
greet("Budi");


// Arrow Function
const jumlah = (a, b) => a + b;
console.log(jumlah(5, 7));


// Default Parameter & Rest Parameter
function salam(nama = "Ryan") {
    console.log("Hai " + nama + "!");
}

function jumlahSemua(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}

salam();
console.log(jumlahSemua(1, 2, 3, 4, 5));