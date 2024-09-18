document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);
    if(pinNumberInput === '1234'){
        console.log('adding money to your account');
        const balance = document.getElementById('account-balance').innerText;
        const newBalance = parseFloat(addMoneyInput) + parseFloat(balance);
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('wrong');
    }
})