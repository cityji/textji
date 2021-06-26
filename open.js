let number = '';
let display = document.getElementById("screen");

setInterval(() => {
    number = document.getElementById("numb").value;
}, 500);

function send() {
    if (number=='') {
        alert("Please Input The number First,")
    } else {       
        display.innerHTML = "Okay. Let me see..."
        window.location.href="https://wa.me/91"+number+"?text=Hi"
    }
}