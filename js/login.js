// console.log('logIn added')

// document.getElementById('button-login').addEventListener('click',function(event){
//     event.preventDefault();

//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber,pinNumber);

//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('You are logged in');
//     }
//     else{
//         alert('Wroong Phone Number Or Pin');
//     }
// })


document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber,pinNumber);

    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('Logged');
        window.location.href = '/home.html'
    }
    else{
        alert('Wrong')
    }
})