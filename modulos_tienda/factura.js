///carrito de compra con arreglo T-T
///FA01==factura01
var FA01 = [];
var iva = 19
var subtotal = 0
FA01.push(['001', 'cobertores', 'camionetas', 'plastico', '10', '0001', 'Jacinto', '2', ' ', 'PSE']);
console.log(FA01);
const carrito_compra = {
    codigo: 001,
    codigo_f: 3333,
    nombre_p: 'audio',
    precio: 10,
    cantidad: 2,
    nombre_cliente: 'Maria',
    subtotal: 00,
    total: 00,
    forma_pagos: "PSE",
}



const productos = require('./productos.js');
class factura extends productos {
    constructor(codigo, nombre_p, marca, material, precio, codigo_f, nombre_cliente, cantidad, precio_total, forma_pagos) {
        super(codigo, nombre_p, marca, material, precio)
        this._codigo_f = codigo_f;
        this._nombre_cliente = nombre_cliente;
        this._cantidad = cantidad;
        this._precio_total = precio_total;
        this._forma_pagos = forma_pagos;
    }
    get codigo_f() {
        this._codigo_f = codigo_f;
    }
    get nombre_cliente() {
        this._nombre_cliente = nombre_cliente;
    }
    get nombre_producto() {
        this._nombre_producto = nombre_producto;
    }
    get cantidad() {
        this._cantidad = cantidad;
    }
    get precio_total() {
        this._precio_total = precio_total;
    }
    get forma_pagos() {
        this._forma_pagos = forma_pagos;
    }

    Calcular_subtotal() {

    }


}

module.exports = factura;