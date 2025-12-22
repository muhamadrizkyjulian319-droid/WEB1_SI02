function showMessage () {
    alert("Visi dan Misi KampusKu berorientasi pada masa depan.")
}

function validateForm() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;

    if (nama === "" || email === "" || pesan === "") {
        alert("Semua field harus diisi!");
        return false;
    }

    alert("Pesan berhasil dikirim!");
    return true;
}