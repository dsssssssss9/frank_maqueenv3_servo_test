input.onButtonPressed(Button.A, function () {
    servos.P2.setAngle(180)
})
input.onButtonPressed(Button.B, function () {
    servos.P2.setAngle(0)
})
basic.showIcon(IconNames.Heart)
servos.P2.setAngle(90)
basic.forever(function () {
	
})
