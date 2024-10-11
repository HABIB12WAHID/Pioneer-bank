
// ...........login area hide and transaction area display........


// login button event handler
const loginBtn = document.getElementById("login");

loginBtn.addEventListener('click', function(){

    const loginArea = document.getElementById("login-area");
    const transactionArea = document.getElementById("transaction-area");

    loginArea.style.display = "none";
    transactionArea.style.display = "block";
});

// Deposit button event handler

const depositBtn = document.getElementById("add-deposit");
depositBtn.addEventListener('click', function(){

    const depositNumber = getInputNumber("deposit-amount");

    // current deposit number
    updateSpanText("current-deposit", depositNumber);

    updateSpanText("current-balance", depositNumber);


    // ..........current balance number.........
    document.getElementById("deposit-amount").value = "";

});

function getInputNumber (id) {   // both of them (deposit & withdraw) same function
    const amount = document.getElementById(id).value;
    amountNumber = parseFloat(amount);
    return amountNumber;
}


// ......current balance and current deposit number function...........

function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalBalance = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalBalance;
}


// ...........Withdraw button event handler...........

const withdrawButton = document.getElementById("add-withdraw");
withdrawButton.addEventListener('click', function(){

    const withdrawNumber = getInputNumber("withdraw-amount");

    updateSpanText("current-withdraw", withdrawNumber);
    updateSpanText("current-balance", -1 * withdrawNumber);

    // total withdraw number
    document.getElementById("withdraw-amount").value = "";
});






