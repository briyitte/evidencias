class productos {
    constructor( nombre, stock,precio) {
    
        this._nombre=nombre;
        this._stock=stock;
        this._precio=precio;

    }

    
    get nombre(){
        return this._nombre;
    }
    get stock(){
        return this._stock;
    }
    get precio(){
        return this._precio;
    }
    set nombre(nombre) { 
          this._nombre=nombre;
    }
    set stock(stock) { 
        this._stock=stock;
  }
  set precio(precio) { 
    this._precio=precio;
   }

}

 const proc1
