document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById("Acount-number").value;
    const pinNumber = document.getElementById("pin").value;
    const convertedPin = parseInt(pinNumber);
    if (accountNumber.length === 11) {
      if (convertedPin === 1234 && pinNumber.length === 4) {
          window.location.href = "../main.html";
      } else {
        alert("Wrong pin");
      }
    } else {
      alert("Number vul hoyeche");
    }
  });
