input.onButtonPressed(Button.A, function () {
    basic.showString("" + segunduak + "' " + segundu_ehunenak + "\"")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("clear")
    segunduak = 0
    segundu_ehunenak = 0
})
let segunduak = 0
let segundu_ehunenak = 0
basic.clearScreen()
segundu_ehunenak = 0
segunduak = 0
loops.everyInterval(1000, function () {
    segunduak += 1
    if (segunduak == 60) {
        segunduak = 0
    }
})
loops.everyInterval(100, function () {
    segundu_ehunenak += 1
    if (segundu_ehunenak == 100) {
        segundu_ehunenak = 0
    }
})
