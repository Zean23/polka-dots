input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 1 - index)
        basic.pause(100)
        led.plot(index, 3 - index)
        basic.pause(100)
        led.plot(index, 5 - index)
        basic.pause(100)
        led.plot(index, 7 - index)
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
