document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    // account number take 
    const account_number = document.getElementById('account-number').value;
    // pin number value taken 
    const pin_number = document.getElementById('pin').value;

    if(account_number.length ===11){
   if(pin_number === '1234'){
    console.log('pin right');
    window.location.href="./main.html"
   }
   else{
    console.log('pin invalid!!!');
    alert("Wrong password !!!")
   }
    }
    else{
       alert("Enter valid number!!!")
    }
})
