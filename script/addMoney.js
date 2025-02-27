document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addAmount = document.getElementById("add-money-amount").value.trim();
      const convertedAmount = parseFloat(addAmount);
      const pin = document.getElementById("pin").value;
      const convertedPin = parseInt(pin);

    const mainBalance = document.getElementById("main-balance").innerText;
      const convertedMainBlance = parseFloat(mainBalance);
      
    if (convertedAmount && convertedPin) {
        if (convertedPin === 1234) {
          const sum = convertedMainBlance + convertedAmount;
          document.getElementById("main-balance").innerText = sum;
        } else {
          alert("Wrong Pin");
        }
    } else {
      alert("Enter a valid number");
      }
      
  });
