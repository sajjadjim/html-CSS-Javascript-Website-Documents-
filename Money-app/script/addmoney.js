document
  .getElementById("add-money-submit")
  .addEventListener("click", function (event) {
    // It use for the screen  dones't give reload to the time when button work
    event.preventDefault();
    // console.log("working button")
    // pin access that take for using
    const pin = document.getElementById("pin-number").value;
    //   converted pin int number
    const convertedPIN = parseInt(pin);

    //AMount take By the getElementById id 
    const amount = document.getElementById("add-amount").value;
    const convertedAMOUNT = parseInt(amount);
    // Get the Main balance access  Here for using this part
    const main_Balance = document.getElementById("main-balance").innerText;
    const mainBalanceConvert = parseFloat(main_Balance);
    // check that the balance; if amount is main balance low then the alert given
    if (amount && pin) {
      if (convertedPIN === 1234) {
        console.log(mainBalanceConvert);
        const sum = mainBalanceConvert + convertedAMOUNT;
        document.getElementById("main-balance").innerText = sum;
        //bank Name Taken
        const bankName = document.getElementById("select_bank").value;
        //Random Number Genarator for the tax. id for
        const transitionNumber = Math.random();
        const container = document.getElementById("transaction-container");
        const div = document.createElement("div");
        //class List Type add for the using that the type of the class
        // div.classList.add("bg-white"); it use for the background color
        div.classList.add("rounded-xl");
        div.classList.add("mt-1");
        div.innerHTML = `
      <div class="bg-white rounded-xl px-2">
                                    <h1 class="text-green-500">ADD money From ${bankName}</h1>
                                    <p>Amount :<span class="text-green-500">$${amount}</span></p>
                                    <h1>Transition Id:${transitionNumber}</h1>
                                 </div>
            `;
        container.appendChild(div);
      } else {
        alert("Enter valid PIN !!!");
      }
    } else {
      alert("Enter amount !!!");
    }
  });
// logout Button work for the log out
document.getElementById("log-out").addEventListener("click", function () {
  window.location.href = "./index.html";
});
