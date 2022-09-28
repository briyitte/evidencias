class persona {
    ///RS=RAZON SOCIAL
    constructor(nombres_RS, cc_nit, telefonos, correo) {
        this._nombres_RS = nombres_RS;
        this._cc_nit = cc_nit;
        this._telefonos = telefonos;
        this._correo = correo;
    }
    get nombres_RS() {
        return this._nombres_RS;
    }
    get cc_nit() {
        return this._cc_nit;
    }
    get telefonos() {
        return this._telefonos;
    }
    get correo() {
        return this._correo;
    }
}

module.exports = persona;