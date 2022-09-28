const productos = require('./productos.js');
class oferta extends productos {
    constructor(codigo, nombre_p, marca, material, precio, h_inicio, h_fin, descuento) {
        super(codigo, nombre_p, marca, material, precio)
        this._h_inicio = h_inicio;
        this._h_fin = h_fin;
        this._descuento = descuento;
    }
    get h_inicio() {
        return this._h_inicio;
    }
    get h_fin() {
        return this._h_fin;
    }
    get descuento() {
        return this._descuento;
    }
}


module.exports = oferta;