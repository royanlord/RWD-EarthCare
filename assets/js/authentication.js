// Proses Register
function dataAuth() {
  let fullName, emailAddress, passwordAddress;
  fullName = document.getElementById("fullName").value;
  emailAddress = document.getElementById("emailAddress").value;
  passwordAddress = document.getElementById("passwordAddress").value;

  let user_save = new Array();
  user_save = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  // cek input wajib di isi
  if (fullName == "" && emailAddress == "" && passwordAddress == "") {
    alert("input wajib di isi semua!");
    return;
  }

  // cek email tidak boleh sama
  if (
    user_save.some((check) => {
      return check.emailAddress == emailAddress;
    })
  ) {
    alert(
      "Email yang anda masukan sudah ada yang menggunakan, coba ganti email anda"
    );
  } else {
    user_save.push({
      fullName: fullName,
      emailAddress: emailAddress,
      passwordAddress: passwordAddress,
    });
    window.location = "../login.html";
    localStorage.setItem("users", JSON.stringify(user_save));
  }

  // hapus data pada saat input telah di isi
  document.getElementById("fullName").value = "";
  document.getElementById("emailAddress").value = "";
  document.getElementById("passwordAddress").value = "";
}

// Proses Login
function dataAuth() {
  let emailAddress, passwordAddress;
  emailAddress = document.getElementById("emailAddress").value;
  passwordAddress = document.getElementById("passwordAddress").value;

  let user_save = new Array();
  user_save = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  // Cek semua input wajib di isi
  if (emailAddress == "" && passwordAddress == "") {
    alert("input wajib di isi semua!");
    return;
  }

  // Periksa email dan password sudah masuk di localstorage
  if (
    user_save.some((v) => {
      return (
        v.emailAddress == emailAddress && v.passwordAddress == passwordAddress
      );
    })
  ) {
    alert("Success login");
    // Halaman sementara
    window.location.href = "https://github.com/";
  } else {
    alert("Email atau Password anda salah!");
  }

  // Clear data
  document.getElementById("emailAddress").value = "";
  document.getElementById("passwordAddress").value = "";
}
