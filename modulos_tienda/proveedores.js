const persona = require("./persona");
class proveedores extends persona {
    constructor(nombres_RS, cc_nit, telefonos, correo, tipo_producto, N_contracto, F_entrega) {
        super(nombres_RS, cc_nit, telefonos, correo);
        this._tipo_producto = tipo_producto;
        this._N_contracto = N_contracto;
        this._F_entrega = F_entrega;
        this._correo = correo;

    }

    get tipo_producto() {
        return this._tipo_producto;
    }
    get N_contracto() {
        return this._N_contracto;
    }
    get F_entrega() {
        return this._F_entrega;
    }
}


module.exports = proveedores;