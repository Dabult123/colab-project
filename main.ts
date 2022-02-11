let Wheel = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ........333333333333333.........
    ........3.............3.........
    ........3.............3.........
    ........3.............3.........
    ........3.............3.........
    ........3.............3.........
    ........333333333333333.........
    ........3.............3.........
    ........3.............3.........
    ........3.............3.........
    ........3.............3.........
    ........3.............3.........
    ........333333333333333.........
    ........3.............3.........
    ........3.............3.........
    ........3.............3.........
    ........3.............3.........
    ........3.............3.........
    ........333333333333333.........
    ........3.............3.........
    ........3.............3.........
    ........3.............3.........
    ........3.............3.........
    ........333333333333333.........
    ........3.............3.........
    ........3.............3.........
    ........3.............3.........
    ........3.............3.........
    ........3.............3.........
    ........333333333333333.........
    ........3.............3.........
    ........3.............3.........
    ........3.............3.........
    ........3.............3.........
    ........3.............3.........
    ........333333333333333.........
    ................................
    `, SpriteKind.Player)
game.splash("Hello " + game.askForString("What is your name?") + "! Welcome to the game!")
let myCounter = sevenseg.createCounter(SegmentStyle.Medium, SegmentScale.Half, 3)
