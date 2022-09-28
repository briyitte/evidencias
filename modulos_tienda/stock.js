const productos = require('./productos.js');
class stock extends productos {
    constructor(codigo, nombre_p, marca, material, precio, existencias) {
        super(codigo, nombre_p, marca, material, precio);
        this._existencias = existencias;
    }

    get existencias() {
        return this._existencias;
    }

}

module.exports = stock;