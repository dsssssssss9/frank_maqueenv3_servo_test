input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(180)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 167)
})
input.onButtonPressed(Button.AB, function () {
    servos.P1.setAngle(90)
    maqueen.motorStop(maqueen.Motors.All)
})
input.onButtonPressed(Button.B, function () {
    servos.P1.setAngle(0)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 106)
})
basic.showLeds(`
    . # # # .
    . . # . .
    . . # . .
    # . # . .
    . # . . .
    `)
maqueen.motorStop(maqueen.Motors.All)
basic.pause(1000)
servos.P1.setAngle(90)
basic.forever(function () {
	
})
