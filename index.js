
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

    // const loginArea = document.getElementById("login-area");
    // loginArea.style.display = "block";

    // const depositArea = document.getElementById("deposit-area");
    // depositArea.style.display = "none"


    const depositAmount = document.getElementById("deposit-amount").value;
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById("current-deposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);

    const totalDeposit = depositNumber + currentDepositNumber;

    document.getElementById("current-deposit").innerText = totalDeposit;

    const currentBalance = document.getElementById("current-balance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById("current-balance").innerText = totalBalance;

    document.getElementById("deposit-amount").value = "";

});


