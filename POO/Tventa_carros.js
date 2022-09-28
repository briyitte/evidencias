class vehiculo {
    constructor(n_serie_motor, marca, año, precio) {
        this._n_serie_motor = n_serie_motor;
        this._marca = marca;
        this._año = año;
        this._precio = precio;
    }
    mostrarMarca_Año() {
        return `marca; ${this._marca} precio ${this._precio} `
    }
    set n_serie_motor(n_serie_motor) {
        this._n_serie_motor = n_serie_motor;
    }
    set marca(marca) {
        this._marca = marca;
    }
    set año(año) {
        this._año = año;
    }
    set precio(precio) {
        this._precio = precio;
    }
    get n_serie_motor() {
        return this._n_serie_motor;
    }
    get marca() {
        return this._marca;
    }
    get año() {
        return this._año;
    }
    get precio() {
        return this._precio;
    }
}

console.log("imprimir clase vehículo");
let Pvehiculo = new vehiculo(13, 'kia', 2003, 150);
console.log(Pvehiculo.mostrarMarca_Año());

class autosCompacto extends vehiculo {
    constructor(n_serie_motor, marca, año, precio, Cpasajeros) {
        super(n_serie_motor, marca, año, precio);
        this._Cpasajeros = Cpasajeros;
    }
    cantidadPasajeros() {
        return `Cantidadde pasajeros que puede ocupar: ${this._Cpasajeros}`
    }
    set Cpasajeros(Cpasajeros) {
        this._Cpasajeros = Cpasajeros;
    }
    get Cpasajeros() {
        return this._Cpasajeros;
    }
}
console.log("datos de un vehículo compacto");
const AC = new autosCompacto(222,"kia", 2006, 2000000,8);
console.log(AC)
console.log(AC.cantidadPasajeros());

class vagonetas extends vehiculo {
    constructor(n_serie_motor, marca, año, precio, cpasajeros, combustible) {
        super(n_serie_motor, marca, año, precio);
        this._cpasajeros = cpasajeros;
        this._combustible = combustible;
    }
    set cpasajeros(cpasajeros) {
        this._cpasajeros = cpasajeros;
    }
    set combustible(combustible) {
        this._combustible = combustible;
    }
    get combustible() {
        return this._combustible;
    }
    get cpasajeros() {
        return this._cpasajeros;
    }
    tipocombustible() {
        return `${this._combustible}`;
    }
}

console.log("imprimir DATOS DE VAGONETAS");
const Pv = new vagonetas(333, "amy", 2006, 2000000, 6, "diesel");
console.log(Pv);
console.log(Pv.mostrarMarca_Año());

class autosLujo extends vehiculo {
    constructor(n_serie_motor, marca, año, precio, cantidad) {
        super(n_serie_motor, marca, año, precio);
        this._cantidad = cantidad;
    }
    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }
    get cantidad() {
        return this._cantidad;
    }

    Mmaterial_cantidad() {
        return `${this._marca} ${this._cantidad}`;
    }

}

console.log("datos de un vehículo de lujo");
const Plujo = new autosLujo(111, "hyndai", 2005, 10000, "reciente", 3);
console.log(Plujo.Mmaterial_cantidad());

class camioneta extends vehiculo {
    constructor(n_serie_motor, marca, año, precio, Ccarga, Ceje, rodada) {
        super(n_serie_motor, marca, año, precio, );
        this._Ccarga = Ccarga;
        this._Ceje = Ceje;
        this._rodada = rodada;
    }
    set Ccarga(Ccarga) {
        this._Ccarga = Ccarga;
    }
    set Ceje(Ceje) {
        this._Ceje = Ceje;
    }
    set rodada(rodada) {
        this._rodada = rodada;
    }
    get rodada() {
        return this._rodada;
    }
    get Ceje() {
        return this._Ceje;
    }
    get Ccarga() {
        return this._Ccarga;
    }
    mostrarcargaeje() {
        return `${this._Ccarga} cantidad de ejes:${this._Ceje} ${this._marca}`
    }
}
console.log("imprimir DATOS DE CAMIONETA");
const Pcam = new camioneta(93939, "citroven", 20004, 3000, 100, 3, "sencilla");
console.log(Pcam);
console.log(Pcam.mostrarcargaeje());