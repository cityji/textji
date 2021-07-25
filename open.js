let number = '';
let display = document.getElementById("screen");

setInterval(() => {
    number = document.getElementById("numb").value;
}, 500);
function chk() {
    if (number.length == 9) {
        display.innerHTML='<span id="allok"> Redy To Check </span>';
    }
    else{
        display.innerHTML='<span id="error">invalid number</span>';
    }
}
function send() {
    if (number == '') {
        alert("Please Input The number First,")
    } else {
        display.innerHTML = "Okay. Let me see..."
        window.location.href = "https://wa.me/91" + number + "?text=Hi"
    }

}