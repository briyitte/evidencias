const factura=require('./factura.js');
class cotizacion extends factura{
    constructor(codigo_f, nombre_cliente, cantidad, precio_total,forma_pagos,duracion, interes){
        super(codigo_f, nombre_cliente, cantidad, precio_total,forma_pagos)
        this._duracion = duracion;
        this._interes = interes;
    }
    get duracion() {
        this._duracion =duracion;
    }
    get interes() {
        this._interes =interes;
    }
}
module.exports=cotizacion;