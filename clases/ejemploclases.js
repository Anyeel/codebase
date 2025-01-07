class tienda{
    constructor(numArticulos, direccion, numero){
        this.numArticulos = numArticulos
        this.direccion = direccion
        this.numero = numero
    }
    SumarArticulos(){
        this.numArticulos++
    }
}

let tienda1 = new tienda(6, "calle larios", 8)
console.log(tienda1.numArticulos)
tienda1.SumarArticulos()
console.log(tienda1.numArticulos)