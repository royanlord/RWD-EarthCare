// Proses Register
function dataAuthRegister() {
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
    Swal.fire({
      title: "Error",
      text: "Input harus wajib di isi semua",
      icon: "error",
    });
    return;
  }

  // cek email tidak boleh sama
  if (
    user_save.some((check) => {
      return check.emailAddress == emailAddress;
    })
  ) {
    Swal.fire({
      title: "Error",
      text: "Email yang anda masukan sudah ada yang menggunakan, coba ganti email anda",
      icon: "error",
    });
  } else {
    user_save.push({
      fullName: fullName,
      emailAddress: emailAddress,
      passwordAddress: passwordAddress,
    });
    Swal.fire({
      title: "Success",
      text: "Registrasi anda berhasil",
      icon: "success",
    });
    localStorage.setItem("users", JSON.stringify(user_save));
  }

  // hapus data pada saat input telah di isi
  document.getElementById("fullName").value = "";
  document.getElementById("emailAddress").value = "";
  document.getElementById("passwordAddress").value = "";
}

// Proses Login
function dataAuthLogin() {
  let emailAddress, passwordAddress;
  emailAddress = document.getElementById("emailAddress").value;
  passwordAddress = document.getElementById("passwordAddress").value;

  let user_save = new Array();
  user_save = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  // Cek semua input wajib di isi
  if (emailAddress == "" && passwordAddress == "") {
    Swal.fire({
      title: "Error",
      text: "Input harus wajib di isi semua",
      icon: "error",
    });
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
    Swal.fire({
      title: "Success",
      text: "Login anda berhasil",
      icon: "success",
    });
    // Halaman sementara
    window.location.href = "https://google.com/";
  } else {
    Swal.fire({
      title: "Error",
      text: "Email atau Password anda salah",
      icon: "error",
    });
  }

  // Clear data
  document.getElementById("emailAddress").value = "";
  document.getElementById("passwordAddress").value = "";
}
