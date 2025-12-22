// 2.1 For Loop
console.log("=== For Loop 1–20 ===");
for (let i = 1; i <= 20; i++) {
     console.log(i);
}

// 2.2 While Loop
console.log("=== While Loop Hitung Mundur 10–1 ===");
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

// 2.3 Do–While Loop
console.log("=== Do–While Loop Halo! ===");
let k = 0;
do {
    console.log("Halo!");
    k++;
} while (k < 0); // kondisi salah, tapi tetap jalan sekali

// 2.4 Break & Continue
console.log("=== Loop 1–10 dengan Break & Continue ===");
for (let n = 1; n <= 10; n++) {
    if (n === 5) continue; // skip angka 5
    if (n === 8) break;    // stop di angka 8
    console.log(n);
}