
// Initial Balance

let balance = 5000;

// Select Elements

const balanceText = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const message = document.getElementById("message");

const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const checkBtn = document.getElementById("checkBtn");
const exitBtn = document.getElementById("exitBtn");

// Function to update balance on screen

function updateBalance(){

    balanceText.innerText = `Balance: Rs. ${balance}`;

}

// Deposit

depositBtn.addEventListener("click",function(){

    let amount = Number(amountInput.value);

    if(amount > 0){

        balance += amount;

        updateBalance();

        message.innerText = "Deposit Successful";

    }

    else{

        message.innerText = "Invalid Amount";

    }

    amountInput.value = "";

});

// Withdraw

withdrawBtn.addEventListener("click",function(){

    let amount = Number(amountInput.value);

    if(amount > 0 && amount <= balance){

        balance -= amount;

        updateBalance();

        message.innerText = "Withdraw Successful";

    }

    else if(amount > balance){

        message.innerText = "Insufficient Balance";

    }

    else{

        message.innerText = "Invalid Amount";

    }

    amountInput.value = "";

});

// Check Balance

checkBtn.addEventListener("click",function(){

    message.innerText = `Current Balance: Rs. ${balance}`;

});

// Exit

exitBtn.addEventListener("click",function(){

    amountInput.value = "";

    message.innerText = "Thank you for using our ATM.";

});