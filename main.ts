// Program should start when an input device on micro:bit A is pressed on PIN 0.
input.onPinPressed(TouchPin.P0, function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        radio.sendString("HELLO!")
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.clearScreen()
})
