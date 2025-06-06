const width = 400;
const height = 400;
const size = 100;
let particle;
let img;

function preload() {
    img = loadImage('berserk.png');
}

function setup() {
    createCanvas(width, height);
    particle = new Particle(random(size / 2, width - size / 2), random(size / 2, height - size / 2), random(-3, 3), random(-3, 3));
}

function draw() {
    background(220);
    particle.display();
    particle.move();
}

class Particle {
    constructor(positionX, positionY, velocityX, velocityY) {
        this.color = this.randomColor();
        this.positionX = positionX;
        this.positionY = positionY;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
    }

    detectBorder() {
        if (this.positionX >= width - size / 2 || this.positionX <= size / 2) {
            this.velocityX *= -1;
            this.color = this.randomColor();
        }
        if (this.positionY >= height - size / 2 || this.positionY <= size / 2) {
            this.velocityY *= -1;
            this.color = this.randomColor();
        }
    }

    move() {
        this.positionX += this.velocityX;
        this.positionY += this.velocityY;
        this.detectBorder();
    }

    randomColor() {
        return color(random(255), random(255), random(255));
    }

    display() {
        fill(this.color);
        image(img, this.positionX - size / 2, this.positionY - size / 2, size, size);
    }
}
