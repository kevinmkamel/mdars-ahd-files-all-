function security() {
    var password = prompt("برجاء ادخال الباسورد");
    if (password == "123") {
      window.location.href = "khodampage.html";
    } else {
      alert("باسورد غلط برجاء اعادة المحاوله");
    }
  }