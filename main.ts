input.onButtonPressed(Button.A, function () {
    denbora = "" + segunduak + "' " + segundu_ehunenak + "\""
    basic.showString(denbora)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 2; index++) {
        basic.showNumber(3 - index)
    }
    basic.clearScreen()
    AB_sakatuta = !(AB_sakatuta)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("garbi")
    segunduak = 0
    segundu_ehunenak = 0
    denbora = "" + segunduak + "' " + segundu_ehunenak + "\""
    AB_sakatuta = false
})
let denbora = ""
let AB_sakatuta = false
let segunduak = 0
let segundu_ehunenak = 0
basic.clearScreen()
segundu_ehunenak = 0
segunduak = 0
AB_sakatuta = false
loops.everyInterval(1000, function () {
    if (AB_sakatuta) {
        segunduak += 1
        if (segunduak == 60) {
            segunduak = 0
        }
    }
})
loops.everyInterval(100, function () {
    if (AB_sakatuta) {
        segundu_ehunenak += 1
        if (segundu_ehunenak == 100) {
            segundu_ehunenak = 0
        }
    }
})
