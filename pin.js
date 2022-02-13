//Random Pin generation
function pinGenerate() {
    const pinField = document.getElementById("pin-show");
    const generatedPin = Math.round(Math.random() * 10000);
    const pin = generatedPin + "";
    if (pin.length == 4) {
        pinField.value = generatedPin;
    }
    else {
        pinGenerate();
    }
}
//Pin typing using "key-pad" id of parrent div of number buttons
document.getElementById('key-pad').addEventListener('click', function (event) {
    const keyPadValue = event.target.innerText;
    const pinEnter = document.getElementById("pin-enter");
    if (isNaN(keyPadValue)) {
        if (keyPadValue == 'C') {
            pinEnter.value = '';   //clear key-pad value
        }
    }
    else {
        const previouspin = pinEnter.value;  //here initial value is '' (empty string)
        const newpin = previouspin + keyPadValue;

        pinEnter.value = newpin;  //showing typed number one after anoter
    }
})

//pin matching  is done by calling varifyPin() function by clicking submit button
function varifyPin() {
    const pin = document.getElementById('pin-show').value;
    const typedPin = document.getElementById('pin-enter').value;
    const successMessage = document.getElementById('pin-success');
    const errorMessage = document.getElementById('pin-error');
    if (pin == typedPin) {
        successMessage.style.display = "block";
        errorMessage.style.display = "none";
    }
    else {
        successMessage.style.display = "none";
        errorMessage.style.display = "block";
    }
}