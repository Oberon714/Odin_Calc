
const keys = document.getElementById("display")

function onAppendToDisplay(input) {
    display.value += input
}

function clearDisplay(){
    display.value = ""
}

function calculate(){
 display.value = eval(display.value)
}