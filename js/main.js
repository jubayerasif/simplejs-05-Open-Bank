// login-btn even handler
const loginBtn = document.getElementById('login-btn').addEventListener('click', function(){
    const loginArea = document.getElementById('login-area').style.display = 'none';
    const transactionArea = document.getElementById('transaction-area').style.display = 'block';
})

//deposit btn event handler
const depositBtn = document.getElementById('addDeposit').addEventListener('click', function(){
    const depositedAmount = document.getElementById('depositedAmount').value;
})



// transaction-area