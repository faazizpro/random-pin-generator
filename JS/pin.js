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
    return random;
}