input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Tempo = 10
    for (let index = 0; index < 10; index++) {
        Tempo += -1
        basic.showNumber(Tempo)
        basic.pause(100)
    }
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . . . #
        . # # # .
        `)
    music.play(music.stringPlayable("C C E D F E A D ", 120), music.PlaybackMode.UntilDone)
})
let Tempo = 0
basic.showNumber(10)
Tempo = 10
