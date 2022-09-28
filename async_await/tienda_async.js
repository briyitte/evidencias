class Productos {
    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
    }
    
    get nombre() {
        return this._nombre;
    }
    
    get precio() {
        return this._precio;
    }
    
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set precio(precio) {
        this._precio = precio;
        }
    }
    const producto1 = new Productos("espejo", 3500);
    const producto2 = new Productos("marcadores", 2600);
    const producto3 = new Productos("balon", 30000);
    const producto4 = new Productos("lapiz", 1000);
    const producto5 = new Productos("colores", 7600);
    const producto6 = new Productos("collar", 50000);
    

    var carrito = [];
   
    let presupuesto= 20000;
    carrito.push(producto1, producto2, producto3);



    /*function verdatos() {
  return new Promise((resolve, reject) => {
    console.log("cargando productos");
    setInterval(() => {
      resolve(carrito);
    }, 2000);
  });
}

async function mostrar() {
  let mis_productos = await verdatos();
  console.log(mis_productos);
}

mostrar();*/

function tienda() {
    return new Promise((resolve, reject) => {
      console.log("cargando productos");
      setInterval((value) => {
        resolve(value);
      }, 2000);
    });
  }
  async function mostrar() {
    let mis_productos = await verdatos();
    console.log(mis_productos);
}