const width  = 10
const height = 10

let w = 115
let h = 60

let dx = 1
let dy = 2

let m = 150

let sx = 30
let sy = 30

let cx = -.5
let cy = 0

for (let y = -h / 2; y < h / 2; y += dy) {
    let buffer = ``
    for (let x = -w / 2; x < w / 2; x += dx) {
        let _x = x / sx + cx 
        let _y = y / sy + cy

        let z_x = 0
        let z_i = 0

        let i = 0
        // expand (a + bi)^2 to get a^2 + 2abi + b^2i^2; it follows that x = a^2 - b^2, y = 2 * a * b
        while (z_x**2 + z_i**2 < 4 && i < m) {
            let z_x_t = z_x**2 - z_i**2 + _x
            z_i = 2 * z_x * z_i + _y
            z_x = z_x_t
            i++
        }
        
        let char = `` + String.fromCharCode(i + 40)
        if (i == m) {
            char = ` `
        }

        buffer += char
    }

    console.log(buffer)
}
