// login-btn even handler
const loginBtn = document.getElementById('login-btn').addEventListener('click', function(){
    const loginArea = document.getElementById('login-area').style.display = 'none';
    const transactionArea = document.getElementById('transaction-area').style.display = 'block';
})

//deposit btn event handler
const depositBtn = document.getElementById('addDeposit').addEventListener('click', function(){
    const depositNumber = getInputNumber('depositAmount');
    // const depositAmount = document.getElementById('depositAmount').value;
    // const depositNumber = parseFloat(depositAmount);
    // const currentDeposit = document.getElementById('currentDeposit').innerHTML;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById('currentDeposit').innerHTML = totalDeposit;
    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBalance', depositNumber);
    document.getElementById('depositAmount').value= "";
})

//withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw').addEventListener('click', function(){
    const withdrawNumber = getInputNumber('withdrawAmount');
    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('currentBalance', -1 * withdrawNumber);
    document.getElementById('withdrawAmount').value = '';
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, addedNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}
