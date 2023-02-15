input.onButtonPressed(Button.A, function () {
    Mahé = randint(0, 7)
    if (Mahé == 0) {
        images.createBigImage(`
            # # . . . . . # # .
            # . . . . . . # # .
            # . . . . . . . # .
            # . . . . . . . # .
            # # . . . . . # # .
            `).scrollImage(1, 200)
    } else if (Mahé == 1) {
        images.createBigImage(`
            # # . . . . . # # .
            # . . . . . . . # .
            # . . . . . . . # .
            # # . . . . . . # .
            # # . . . . . # # .
            `).scrollImage(1, 200)
    } else if (Mahé == 2) {
        images.createBigImage(`
            # # . . . # . # # .
            # . . . . . . . # .
            # . . . . . . . # .
            # . . . . . . . # .
            # # . . . . . # # .
            `).scrollImage(1, 200)
    } else if (Mahé == 3) {
        images.createBigImage(`
            # # . . . . . # # .
            # . . . . . . . # .
            # . . . . . . . # .
            # . . . . . . . # .
            # # . # . . . # # .
            `).scrollImage(1, 200)
    } else if (Mahé == 4) {
        images.createBigImage(`
            # # . . . . . # # .
            # . . . . . . . # .
            # . . . . . . . # .
            # . . . . . . . # .
            # # . . . # . # # .
            `).scrollImage(1, 200)
    } else if (Mahé == 5) {
        images.createBigImage(`
            # # . # . . . # # .
            # . . . . . . . # .
            # . . . . . . . # .
            # . . . . . . . # .
            # # . . . . . # # .
            `).scrollImage(1, 200)
    } else if (Mahé == 6) {
        images.createBigImage(`
            # # . . . . . # # .
            # . . . . . . . # .
            # . . . . . . . # .
            # . . . . . . # # .
            # # . . . . . # # .
            `).scrollImage(1, 200)
    } else if (Mahé == 7) {
        images.createBigImage(`
            # # . . . . . # # .
            # # . . . . . . # .
            # . . . . . . . # .
            # . . . . . . . # .
            # # . . . . . # # .
            `).scrollImage(1, 200)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
let Mahé = 0
images.createBigImage(`
    # # . . . . . # # .
    # . . . . . . . # .
    # . . . . . . . # .
    # . . . . . . . # .
    # # . . . . . # # .
    `).scrollImage(1, 200)
basic.forever(function () {
    images.createBigImage(`
        # # . . . . . # # .
        # . . . . . . . # .
        # . . . . . . . # .
        # . . . . . . . # .
        # # . . . . . # # .
        `).scrollImage(1, 200)
})
