class Particle {
    constructor() {
        this.x = width / 2
        this.y = height
    }
    show() {
        stroke(0, random(100, 255), 0)
        strokeWeight(2)
        point(this.x, this.y)
    }
    up() {
        this.y--
    }
    down() {
        this.y++
    }
    right() {
        this.x++
    }
    left() {
        this.x--
    }
    randomWalk() {
        const direcciones = ["up", "right", "left"]
        const direccion = random(direcciones)
        //console.log(direccion)
        if (direccion === "up") this.up()
        if (direccion === "down") this.down()
        if (direccion === "left") this.left()
        if (direccion === "right") this.right()
    }
}

let particulas = []
let img

function preload() {
    img = loadImage('paisaje.jpg')
}

function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < 10; i++) {
        particulas.push(new Particle())
    }
    background(img)
}

function draw() {
    for (let particula of particulas) {
        particula.show()
        particula.randomWalk()
    }
}
