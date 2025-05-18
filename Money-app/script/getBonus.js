document
  .getElementById("get-bonus-submit")
  .addEventListener("click", function (event) {
    event.preventDefault();

    //Bonus Code taken by the getElementById id
    const BonusCode = document.getElementById("coupon-code").value;

    const main_Balance = document.getElementById("main-balance").innerText;
    const mainBalanceConvert = parseFloat(main_Balance);
    console.log("BonusCode");
    // check that the balance if amount is main balance low then the alert given
    if (BonusCode === "bonus10") {
      console.log("You get extra 10% Bonus");
      const sum = mainBalanceConvert + 1000;
      document.getElementById("main-balance").innerText = sum;

  const container = document.getElementById("transaction-container");
  const div = document.createElement("div");
  div.classList.add("rounded-xl");
  div.classList.add("mt-1");
  div.innerHTML = `
  <div class="bg-white rounded-xl px-2">
  <h1 class="text-purple-600">Get Bonus</h1>
<p>Get Bonus:<span class="text-green-500">$ 10%</span></p>
</div>
`;
 // Append child use for the add the child element in the parent element
      container.appendChild(div);
     
    }
    if (BonusCode === "bonus20") {
      console.log("You get extra 10% Bonus");
      const sum = mainBalanceConvert + 2000;
      document.getElementById("main-balance").innerText = sum;
      const container = document.getElementById("transaction-container");
      const div = document.createElement("div");
      div.classList.add("rounded-xl");
      div.classList.add("mt-1");
      div.innerHTML = `
    <div class="bg-white rounded-xl px-2">
          <h1 class="text-purple-600">Get Bonus</h1>
  <p>Get Bonus:<span class="text-green-500">$ 20%</span></p>
  </div>
  `;
      container.appendChild(div);
    }
    if (BonusCode === "bonus30") {
      console.log("You get extra 10% Bonus");
      const sum = mainBalanceConvert + 3000;
      document.getElementById("main-balance").innerText = sum;
      const container = document.getElementById("transaction-container");
      const div = document.createElement("div");
      div.classList.add("rounded-xl");
      div.classList.add("mt-1");
      div.innerHTML = `
    <div class="bg-white rounded-xl px-2">
          <h1 class="text-purple-600">Get Bonus</h1>
  <p>Get Bonus:<span class="text-green-500">$ 30%</span></p>
  </div>
  `;
      container.appendChild(div);
    } 
    
    if (BonusCode === "bonus40") {
      console.log("You get extra 40% Bonus");
      const sum = mainBalanceConvert + 4000;
      document.getElementById("main-balance").innerText = sum;
      const container = document.getElementById("transaction-container");
      const div = document.createElement("div");
      div.classList.add("rounded-xl");
      div.classList.add("mt-1");
      div.innerHTML = `
    <div class="bg-white rounded-xl px-2">
          <h1 class="text-purple-600">Get Bonus</h1>
  <p>Get Bonus:<span class="text-green-500">$ 40%</span></p>
  </div>
  `;
      container.appendChild(div);
    }
    if (BonusCode === "bonus50") {
      console.log("You get extra 50% Bonus");
      const sum = mainBalanceConvert + 5000;
      document.getElementById("main-balance").innerText = sum;
      const container = document.getElementById("transaction-container");
      const div = document.createElement("div");
      div.classList.add("rounded-xl");
      div.classList.add("mt-1");
      div.innerHTML = `
    <div class="bg-white rounded-xl px-2">
          <h1 class="text-purple-600">Get Bonus</h1>
  <p>Get Bonus:<span class="text-green-500">$ 30%</span></p>
  </div>
  `;
      container.appendChild(div);
    }
    else {
      alert("Successfully enter coupon !!!");
    }
  });
// logout Button work
document.getElementById("log-out").addEventListener("click", function () {
  window.location.href = "./index.html";
});
