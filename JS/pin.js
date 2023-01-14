function getPin(){
    const pin = generateRandomPin();
    if(pin.toString().length === 4){
        return pin
    }
    else{
        return getPin();
    }
}

function generateRandomPin(){
    const random = Math.round(Math.random() * 10000);
    console.log(random);
    return random;
};

document.getElementById('pin-generate').addEventListener('click', function(){
    const inputField = document.getElementById('show-pin');
    inputField.value = getPin();
    // console.log(inputField.value);
});

document.getElementById('copy').addEventListener('click', function () {
    const copyText = document.getElementById('show-pin');
    navigator.clipboard.writeText(copyText.value);
    alert(`Pin Copied: ${copyText.value}`);
    const inputField = document.getElementById('show-pin');
    inputField.value = '';
});