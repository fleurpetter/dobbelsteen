input.onButtonPressed(Button.A, function () {
    basic.showNumber(6)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (randint(1, 6)))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
