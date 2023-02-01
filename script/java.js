function validateForm() {
  var x = document.forms["myForm"]["email"].value;
  var y = document.forms["myForm"]["password"].value;
  if (x == "admin" && y == "admin") {
    alert("Selamat Datang!");
    return true;
  } else {
    alert("Maaf, Username/Password Salah");
    return false;
  }
}
