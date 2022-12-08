function 燈數 (num: number) {
    if (num % 5 == 0) {
        x = 4
        y = Math.floor(num / 5) - 1
    } else {
        x = num % 5 - 1
        y = Math.floor(num / 5)
    }
    led.plot(x, y)
}
input.onButtonPressed(Button.A, function () {
    亮燈數 += -1
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    list = []
    for (let index = 0; index < 25; index++) {
        list.push(0 - 0)
    }
    n = 0
    while (n < 亮燈數) {
        a = randint(0, 24)
        if (list[a] == 0) {
            list[a] = 1 - 0
            n += 1
            燈數(a + 1)
        }
    }
    basic.pause(200)
    if (亮燈數 < 0) {
        亮燈數 = 1
    }
    if (亮燈數 > 25) {
        亮燈數 = 25
    }
})
input.onButtonPressed(Button.B, function () {
    亮燈數 += 1
})
let a = 0
let n = 0
let list: number[] = []
let y = 0
let x = 0
let 亮燈數 = 0
亮燈數 = 1
basic.forever(function () {
	
})
