class pelicula {
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }
    reproducir() {
        return `Reproduciendo pelicula : ${this.nombre}`;
    }
}
class serie extends pelicula {
    constructor(nombre, id, cap) {
        super(nombre, id);
        this.cap = cap;


    }
    reproducircapitulo() {
        return `reproduciendo capitulo ${this.cap}.. ${this.nombre}`
    }
}
let peliculaUno = new pelicula('batman', 1);
let peliculaDos = new pelicula('barbie', 2);
let serieUno = new serie('Dexter', 3, 45);
console.log(peliculaUno.reproducir());
console.log(peliculaDos.reproducir());
console.log(serieUno.reproducircapitulo());