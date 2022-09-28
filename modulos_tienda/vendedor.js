const persona = require('./persona.js');
///vendedor==admin
class vendedor extends persona {
    constructor(nombres_RS, cc_nit, telefonos, correo, cod_usuario) {
        super(nombres_RS, cc_nit, telefonos, correo);
        this._cod_usuario = cod_usuario;
    }
    get cod_usuario() {
        return this._cod_usuario;
    }
}
module.exports = vendedor;