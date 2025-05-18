document.getElementById("add-money11").style.display = "none";
document.getElementById("cashout1").style.display = "none";
document.getElementById("transfer-money1").style.display = "none";
document.getElementById("get-bonus1").style.display = "none";
document.getElementById("transaction-history1").style.display = "none";
document.getElementById("pay-bill1").style.display = "none";
document.getElementById("last-payment-status").style.display = "block";

// Main logo
document.getElementById("main-button").addEventListener("click", function () {
  document.getElementById("add-money11").style.display = "none";
  document.getElementById("cashout1").style.display = "none";
  document.getElementById("transfer-money1").style.display = "none";
  document.getElementById("get-bonus1").style.display = "none";
  document.getElementById("transaction-history1").style.display = "none";
  document.getElementById("pay-bill1").style.display = "none";
});

// add money button
document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    document.getElementById("add-money11").style.display = "block";
    document.getElementById("cashout1").style.display = "none";
    document.getElementById("transfer-money1").style.display = "none";
    document.getElementById("get-bonus1").style.display = "none";
    document.getElementById("transaction-history1").style.display = "none";
    document.getElementById("pay-bill1").style.display = "none";
    document.getElementById("last-payment-status").style.display = "none";
    //  color Givven
    document.getElementById("transfer-money").style.backgroundColor = "white";
    document.getElementById("add-money").style.backgroundColor = "#fcfcf1";
    document.getElementById("cashout").style.backgroundColor = "white";
    document.getElementById("pay-bill").style.backgroundColor = "white";
    document.getElementById("get-bonus").style.backgroundColor = "white";
    document.getElementById("transaction").style.backgroundColor = "white";
  });
// cashout button
document.getElementById("cashout").addEventListener("click", function (event) {
  document.getElementById("add-money11").style.display = "none";
  document.getElementById("cashout1").style.display = "block";
  document.getElementById("transfer-money1").style.display = "none";
  document.getElementById("get-bonus1").style.display = "none";
  document.getElementById("transaction-history1").style.display = "none";
  document.getElementById("pay-bill1").style.display = "none";
  document.getElementById("last-payment-status").style.display = "none";
  //  color Givven
  document.getElementById("transfer-money").style.backgroundColor = "white";
  document.getElementById("add-money").style.backgroundColor = "white";
  document.getElementById("cashout").style.backgroundColor = "#fcf9f1";
  document.getElementById("pay-bill").style.backgroundColor = "white";
  document.getElementById("get-bonus").style.backgroundColor = "white";
  document.getElementById("transaction").style.backgroundColor = "white";
});

// transfer money part here
document
  .getElementById("transfer-money")
  .addEventListener("click", function () {
    document.getElementById("add-money11").style.display = "none";
    document.getElementById("cashout1").style.display = "none";
    document.getElementById("transfer-money1").style.display = "block";
    document.getElementById("get-bonus1").style.display = "none";
    document.getElementById("transaction-history1").style.display = "none";
    document.getElementById("pay-bill1").style.display = "none";
    document.getElementById("last-payment-status").style.display = "none";
    //  color Givven
    document.getElementById("transfer-money").style.backgroundColor = "#f6fcf1";
    document.getElementById("add-money").style.backgroundColor = "white";
    document.getElementById("cashout").style.backgroundColor = "white";
    document.getElementById("pay-bill").style.backgroundColor = "white";
    document.getElementById("get-bonus").style.backgroundColor = "white";
    document.getElementById("transaction").style.backgroundColor = "white";
  });

// Get bonus Button
document.getElementById("get-bonus").addEventListener("click", function () {
  document.getElementById("add-money11").style.display = "none";
  document.getElementById("cashout1").style.display = "none";
  document.getElementById("transfer-money1").style.display = "none";
  document.getElementById("get-bonus1").style.display = "block";
  document.getElementById("transaction-history1").style.display = "none";
  document.getElementById("pay-bill1").style.display = "none";
  document.getElementById("last-payment-status").style.display = "none";

  //  color Givven
  document.getElementById("transfer-money").style.backgroundColor = "white";
  document.getElementById("add-money").style.backgroundColor = "white";
  document.getElementById("cashout").style.backgroundColor = "white";
  document.getElementById("pay-bill").style.backgroundColor = "white";
  document.getElementById("get-bonus").style.backgroundColor = "#fcf1fc";
  document.getElementById("transaction").style.backgroundColor = "white";
});

// pay Bill
document.getElementById("pay-bill").addEventListener("click", function () {
  document.getElementById("add-money11").style.display = "none";
  document.getElementById("cashout1").style.display = "none";
  document.getElementById("transfer-money1").style.display = "none";
  document.getElementById("get-bonus1").style.display = "none";
  document.getElementById("transaction-history1").style.display = "none";
  document.getElementById("pay-bill1").style.display = "block";
  document.getElementById("last-payment-status").style.display = "none";

  //  color Givven
  document.getElementById("transfer-money").style.backgroundColor = "white";
  document.getElementById("add-money").style.backgroundColor = "white";
  document.getElementById("cashout").style.backgroundColor = "white";
  document.getElementById("pay-bill").style.backgroundColor = "#fcf1f6";
  document.getElementById("get-bonus").style.backgroundColor = "white";
  document.getElementById("transaction").style.backgroundColor = "white";
});

// transection History
document.getElementById("transaction").addEventListener("click", function () {
  document.getElementById("add-money11").style.display = "none";
  document.getElementById("cashout1").style.display = "none";
  document.getElementById("transfer-money1").style.display = "none";
  document.getElementById("get-bonus1").style.display = "none";
  document.getElementById("transaction-history1").style.display = "block";
  document.getElementById("pay-bill1").style.display = "none";
  document.getElementById("last-payment-status").style.display = "none";

  //  color Givven
  document.getElementById("transfer-money").style.backgroundColor = "white";
  document.getElementById("add-money").style.backgroundColor = "white";
  document.getElementById("cashout").style.backgroundColor = "white";
  document.getElementById("pay-bill").style.backgroundColor = "white";
  document.getElementById("get-bonus").style.backgroundColor = "white";
  document.getElementById("transaction").style.backgroundColor = "#f1f9fc";
});
