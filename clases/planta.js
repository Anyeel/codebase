class Particle {
    constructor() {
        this.x = width / 2
        this.y = height - 100
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
let imgFondo
let anchoImagen
let altoImagen
let imgTiesto

function preload() {
    imgFondo = loadImage('paisaje.jpg')
    imgTiesto = loadImage('maceta.png')
}

function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < 10; i++) {
        particulas.push(new Particle())
    } background(imgFondo)
    anchoImagen = imgTiesto.width * 0.1
    altoImagen = imgTiesto.height * 0.1
    image(imgTiesto, (width - anchoImagen) / 2, height - altoImagen + 15, anchoImagen, altoImagen)
}

function draw() {
    for (let particula of particulas) {
        particula.show()
        particula.randomWalk()
    }
}

function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
}
