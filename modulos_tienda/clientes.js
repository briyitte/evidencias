const persona = require("./persona");

class clientes extends persona {
    constructor(nombres_RS, cc_nit, telefonos, correo, contraseña) {
        super(nombres_RS, cc_nit, telefonos, correo);
        this._contraseña = contraseña;
    }
    get contraseña() {
        return this._contraseña;
    }
}

module.exports = clientes;