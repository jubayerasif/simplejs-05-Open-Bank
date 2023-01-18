// login-btn even handler
const loginBtn = document.getElementById('login-btn').addEventListener('click', function(){
    const loginArea = document.getElementById('login-area').style.display = 'none';
    const transactionArea = document.getElementById('transaction-area').style.display = 'block';
})

//deposit btn event handler
const depositBtn = document.getElementById('addDeposit').addEventListener('click', function(){
    const depositedAmount = document.getElementById('depositedAmount').value;
    const depositNumber = parseFloat(depositedAmount);

    // const currentDeposit = document.getElementById('currentDeposit').innerHTML;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById('currentDeposit').innerHTML = totalDeposit;

    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBalance', depositNumber);

    document.getElementById('depositedAmount').value= "";
})

//withdraw button handler
const withdrawBtn = document.getElementById('addWithdraw').addEventListener('click', function(){
    const withdrawNumber = getInputNumber('withdrawAmount');
    console.log(withdrawNumber);
})

function getInputNumber(){
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawNumber = parseFloat(withdrawAmount);
    return withdrawNumber;
}




function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}


// transaction-area