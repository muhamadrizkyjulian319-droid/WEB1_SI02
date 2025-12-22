function tambah() {
    let a = Number(document.getElementById("angka1").value);
    let b = Number(document.getElementById("angka2").value);
    document.getElementById("hasil").innerHTML = "Hasil: " + (a + b);
    }

function kurang() {
    let a = Number(document.getElementById("angka1").value);
    let b = Number(document.getElementById("angka2").value);
    document.getElementById("hasil").innerHTML = "Hasil: " + (a - b);
}

function kali() {
    let a = Number(document.getElementById("angka1").value);
    let b = Number(document.getElementById("angka2").value);
    document.getElementById("hasil").innerHTML = "Hasil: " + (a * b);
    }

function bagi() {
    let a = Number(document.getElementById("angka1").value);
    let b = Number(document.getElementById("angka2").value);
    if (b === 0) {
            document.getElementById("hasil").innerHTML = "Error: Tidak bisa dibagi dengan nol!";
    } else {
            document.getElementById("hasil").innerHTML = "Hasil: " + (a / b);
    }
    }