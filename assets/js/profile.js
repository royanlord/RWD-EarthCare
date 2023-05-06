document.getElementById(
  "profileUser"
).innerHTML = `Welcome, ${localStorage.getItem("fullName")}`;

document.getElementById("profileUserNavbar").innerText =
  localStorage.getItem("fullName");
console.log(localStorage.getItem("fullName"));
