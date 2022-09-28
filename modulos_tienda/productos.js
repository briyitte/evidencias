const categoria=require('./categoria.js');
class productos extends categoria {
    constructor(id_categoria,nombre_k,codigo, nombre_p, marca, material,precio) {
        super (id_categoria,nombre_k)
        this._codigo=codigo;
        this._nombre_p=nombre_p;
        this._marca=marca;
        this._material=material;
        this._precio=precio;

    }

    get codigo(){
        return this._codigo;
    }
    get nombre_p(){
        return this._nombre_p;
    }
    get marca(){
        return this._marca;
    }
    get material(){
        return this._material;
    }
    get precio(){
        return this._precio;
    }
}

module.exports=productos;