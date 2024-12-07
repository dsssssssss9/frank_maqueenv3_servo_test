input.onButtonPressed(Button.A, function () {
    servos.P2.setAngle(180)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 73)
})
input.onButtonPressed(Button.AB, function () {
    servos.P2.setAngle(90)
    maqueen.motorStop(maqueen.Motors.All)
})
input.onButtonPressed(Button.B, function () {
    servos.P2.setAngle(0)
})
basic.showIcon(IconNames.Happy)
maqueen.motorStop(maqueen.Motors.All)
servos.P2.setAngle(90)
basic.forever(function () {
	
})
