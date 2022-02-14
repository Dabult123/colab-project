let Player_2: Sprite = null
let Player_1: Sprite = null
let Wheel = sprites.create(img`
    3333333333333
    3...........3
    3.3.........3
    3.3.........3
    3.3.........3
    3...........3
    3333333333333
    3...........3
    3.3.333.....3
    3.3.3.3.....3
    3.3.333.....3
    3...........3
    3333333333333
    3...........3
    3.3.333.333.3
    3.3.3.3.3.3.3
    3.3.333.333.3
    3...........3
    3333333333333
    3...........3
    3.3.333.333.3
    3.3.3.3.3.3.3
    3.3.333.333.3
    3...........3
    3333333333333
    3...........3
    3.3.333.....3
    3.3.3.3.....3
    3.3.333.....3
    3...........3
    3333333333333
    3...........3
    3.3.........3
    3.3.........3
    3.3.........3
    3...........3
    3333333333333
    `, SpriteKind.Player)
game.splash("Hello " + game.askForString("What is your name?") + "! Welcome to the game!")
if (game.ask("A for Player 1 or B Player 2")) {
    Player_1 = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Player)
    Player_1.setPosition(137, 15)
    controller.moveSprite(Player_1)
} else {
    Player_2 = sprites.create(img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `, SpriteKind.Player)
    Player_2.setPosition(21, 89)
    controller.moveSprite(Player_2)
}
Wheel.setPosition(10, 55)
let myCounter = sevenseg.createCounter(SegmentStyle.Medium, SegmentScale.Half, 3)
