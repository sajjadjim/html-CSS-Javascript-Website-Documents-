document
  .getElementById("transfer-money-submit")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("working button")
    // pin access that
    const pin = document.getElementById("pin-number").value;
    //   converted pin int number
    const convertedPIN = parseInt(pin);

    //AMount take
    const amount = document.getElementById("transfer-money-amount").value;
    const convertedAMOUNT = parseInt(amount);
    // Get the Main balance Here
    const main_Balance = document.getElementById("main-balance").innerText;
    const mainBalanceConvert = parseFloat(main_Balance);
    // check that the balance
    if (amount && pin) {
      if (convertedPIN === 1234) {
        console.log(mainBalanceConvert);
        const sum = mainBalanceConvert - convertedAMOUNT;
        document.getElementById("main-balance").innerText = sum;

        document.getElementById("main-balance").innerText = sum;
        //Account Name Taken
        const accountNumber = document.getElementById("transfer-account-number").value;
        //random Number Genarator
        const transitionNumber = Math.random();
        const container = document.getElementById("transaction-container");
        const div = document.createElement("div");
        div.classList.add("rounded-xl");
        div.classList.add("mt-1");
        div.innerHTML = `
      <div class="bg-white rounded-xl px-2">
                                    <h1 class="text-yellow-400">Send Money ${accountNumber}</h1>
                                    <p>Amount :<span class="text-red-400">$${amount}</span></p>
                                    <h1>Transition Id:${transitionNumber}</h1>
                                 </div>
            `;
        container.appendChild(div);
      } else {
        alert("Enter valid PIN !!!");
      }
    } else {
      alert("Enter transfer amount !!!");
    }
  });
// logout Button work 
  document.getElementById('log-out').addEventListener('click',function(){
    window.location.href="./index.html"
})
