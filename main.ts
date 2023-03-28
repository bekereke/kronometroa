input.onButtonPressed(Button.A, function () {
    basic.showNumber(segunduak)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(segundu_ehunenak)
})
let segunduak = 0
let segundu_ehunenak = 0
basic.clearScreen()
segundu_ehunenak = 0
segunduak = 0
loops.everyInterval(1000, function () {
    segunduak += 1
})
loops.everyInterval(100, function () {
    segundu_ehunenak += 1
    if (segundu_ehunenak == 100) {
    	
    }
})
