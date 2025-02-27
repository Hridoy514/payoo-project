const addMoneyBox = document.getElementById("add-money-box");
const cashOutBox = document.getElementById("cashout-box");
const payBillBox = document.getElementById("pay-bill-box");
const transferMoneyBox = document.getElementById("transfer-money-box");
const getBonusBox = document.getElementById("get-bonus-box");
const historyBox = document.getElementById("history-box");

// Hide all section
document.getElementById("addmoney-section").style.display = "none";
document.getElementById("cashout-section").style.display = "none";
document.getElementById("transfer-money-section").style.display = "none";
document.getElementById("get-bonus-section").style.display = "none";
document.getElementById("pay-bill-section").style.display = "none";
document.getElementById("transaction-history-section").style.display = "none";

addMoneyBox.addEventListener("click", function () {
    document.getElementById("addmoney-section").style.display = "block";
    document.getElementById("cashout-section").style.display = "none";
    document.getElementById("transfer-money-section").style.display = "none";
    document.getElementById("get-bonus-section").style.display = "none";
    document.getElementById("pay-bill-section").style.display = "none";
    document.getElementById("transaction-history-section").style.display =
      "none";
})

cashOutBox.addEventListener("click", function () {
    document.getElementById("addmoney-section").style.display = "none";
    document.getElementById("cashout-section").style.display = "block";
    document.getElementById("transfer-money-section").style.display = "none";
    document.getElementById("get-bonus-section").style.display = "none";
    document.getElementById("pay-bill-section").style.display = "none";
    document.getElementById("transaction-history-section").style.display =
      "none";
});
payBillBox.addEventListener("click", function () {
  document.getElementById("addmoney-section").style.display = "none";
  document.getElementById("cashout-section").style.display = "none";
  document.getElementById("transfer-money-section").style.display = "none";
  document.getElementById("get-bonus-section").style.display = "none";
  document.getElementById("pay-bill-section").style.display = "block";
  document.getElementById("transaction-history-section").style.display = "none";
});
transferMoneyBox.addEventListener("click", function () {
  document.getElementById("addmoney-section").style.display = "none";
  document.getElementById("cashout-section").style.display = "none";
  document.getElementById("transfer-money-section").style.display = "block";
  document.getElementById("get-bonus-section").style.display = "none";
  document.getElementById("pay-bill-section").style.display = "none";
  document.getElementById("transaction-history-section").style.display = "none";
});
getBonusBox.addEventListener("click", function () {
  document.getElementById("addmoney-section").style.display = "none";
  document.getElementById("cashout-section").style.display = "none";
  document.getElementById("transfer-money-section").style.display = "none";
  document.getElementById("get-bonus-section").style.display = "block";
  document.getElementById("pay-bill-section").style.display = "none";
  document.getElementById("transaction-history-section").style.display = "none";
});
historyBox.addEventListener("click", function () {
  document.getElementById("addmoney-section").style.display = "none";
  document.getElementById("cashout-section").style.display = "none";
  document.getElementById("transfer-money-section").style.display = "none";
  document.getElementById("get-bonus-section").style.display = "none";
  document.getElementById("pay-bill-section").style.display = "none";
  document.getElementById("latest-pay").style.display = "none";
  document.getElementById("transaction-history-section").style.display =
    "block";
});