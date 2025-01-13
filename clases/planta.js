class Particle {
    constructor() {
        this.x = random(160, 240)
        this.y = height - 100
        this.tipo = random(["left", "right", "up"])
        this.vida = random(1000)
    }
    show() {
        let probabilidadFlor = random(1)
        if (this.vida > 0){        
            if (probabilidadFlor < 0.05){
                stroke (255, 0, 0)
                strokeWeight(2)
                ellipse(this.x, this.y, 1, 1)
            }
            else{
                stroke(0, random(100, 255), 0)
                strokeWeight(2)
                point(this.x, this.y)
            } 
        }
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
        if (this.vida > 0){        
            if (direccion === "up") this.up()
            if (direccion === "down") this.down()
            if (direccion === "left") {
                if (this.tipo === "left"){
                    for (let i = 0; i < 2; i++){ 
                        this.left()
                    }
                }
                else this.left()
            }
            if (direccion === "right") {
                if (this.tipo === "right") {
                    for (let i = 0; i < 2; i++){ 
                        this.right()
                    }
                }
                else this.right()
            }
            this.vida--
        }
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
    for (let i = 0; i < 20; i++) {
        particulas.push(new Particle())
    } 
    background(imgFondo)
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
