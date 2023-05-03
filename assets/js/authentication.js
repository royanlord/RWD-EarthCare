const buttonRegister = document.querySelector(".btn-success");
buttonRegister.onclick = (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const emailAddress = document.getElementById("emailAddress").value;
  const passwordAddress = document.getElementById("passwordAddress").value;

  localStorage.setItem("FullName", fullName);
  localStorage.setItem("Email", emailAddress);
  localStorage.setItem("Password", passwordAddress);
};
