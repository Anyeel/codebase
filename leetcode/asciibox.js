let ancho = 3
let alto = 3

let Box = ["╔", "╗", "╚", "╝", "║", "═"]
let fila = ""
let columnas = Box[4]
for (let i = 0; i < ancho; i++){
    fila += Box[5]
    columnas += " "
}
columnas += Box[4]

console.log(Box[0] + fila + Box[1])
for (let i = 0; i < alto; i++){
    console.log(columnas)
}
console.log(Box[2] + fila + Box[3])