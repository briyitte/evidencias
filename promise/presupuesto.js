class Productos {
    constructor(nombre_p, precio) {
        this._nombre_p = nombre_p;
        this._precio = precio;
    }

    get nombre_p() {
        return this._nombre_p;
    }

    get precio() {
        return this._precio;
    }

    set nombre_p(nombre_p) {
        this._nombre_p = nombre_p;
    }
    set precio(precio) {
        this._precio = precio;
    }
}
const producto1 = new Productos("espejo", 3500);
const producto2 = new Productos("marcadores", 2600);
const producto3 = new Productos("balon", 30000);
const producto4 = new Productos("lapiz", 1000);
const producto5 = new Productos("colores", 7600);
const producto6 = new Productos("collar", 50000);

const p = 200000;
let value = 36100;
var carrito = [];
carrito.push(producto1, producto2, producto3);

function mipromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Bienvenido a carrito de compra`)
            resolve(carrito);
        }, 1000);
    });
}
mipromise(carrito)
    .then(calculapresupuesto)

function calculapresupuesto(saldo) {
    saldo = 0;
    if (value > p) {
        console.log("sobre pasa el presupuesto");
    } else {
        saldo = value - p;
        console.log(`Todavia estas en tu presupuesto...tu saldo es de :${saldo}`)

    }

}