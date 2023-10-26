function replacename() {
    let greetingName = prompt("Siapa nama anda?", "");
    document.getElementById("greetingName").innerHTML = greetingName
}

replacename();

function showDateTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    var seconds = date.getSeconds().toString().padStart(2, '0');

    var dateTimeString = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
    return dateTimeString;
}

function saveData () {
    var nama = document.getElementById("nama").value;
    var tanggallahir = document.getElementById("tanggallahir").value;
    var jeniskelamin = document.querySelector('input[name="jeniskelamin"]:checked').value;
    var pesan = document.getElementById("pesan").value;

    var submitForm = document.getElementById("table2");

    if (nama === "" || tanggallahir === "" || jeniskelamin === "" || pesan === "") {
        alert("Harap isi semua data!");
        return;
    }

    submitForm.innerHTML = "Current Time : " + showDateTime() + "<br><br>Nama : " + nama + "<br>Tanggal Lahir : " + tanggallahir + "<br>Jenis Kelamin : " + jeniskelamin + "<br>Pesan : " + pesan;
}

var radioButtons = document.querySelectorAll('input[name="jeniskelamin"]');
radioButtons.forEach(function (radio) {
    radio.checked = false;
});

var simpanButton = document.querySelector("button");
simpanButton.addEventListener("click", function() {
    saveData();
});