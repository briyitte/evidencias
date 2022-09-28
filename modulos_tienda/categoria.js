class categoria {
    constructor(id_categoria,nombre_k) {
        this._id_categoria=id_categoria;
        this._nombre_k=nombre_k;

    }

    get id_categoria(){
        return this._id_categoria;
    }
    get nombre_k(){
        return this._nombre_k;
    }
}

module.exports=categoria;