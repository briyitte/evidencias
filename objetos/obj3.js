class usuario {
    constructor(id,nombre,edad){
        this._id = id;
        this._nombre = nombre;
        this._edad = edad;
    }
}
class estudiante extends usuario {
    constructor(id,nombre,edad,ficha,programa){
        super(id,nombre,edad);
        this._ficha = ficha;
        this._programa = programa;
    }
}
var e1=new estudiante(111,"Juan Perez",18,263554,"adsi");
var e2=new estudiante(112,"Ana Herrera",18,263554,"adsi");
class moto {
    constructor(placa, estudiante){
        this._placa = placa;
        this._estudiante = estudiante;
    }
}
var m1=new moto("se-113", e1);
console.log(m1);

class grupo {
    constructor(codGrupo, estudiantes){
        this._codGrupo= codGrupo;
        this._estudiantes=estudiantes;
    }
    incorporaEstudiante(estudiante){
        this._estudiantes.push(estudiante);
    }
}
var g1=[];
var grupo1=new grupo(909,g1);
console.log(grupo1);
grupo1.incorporaEstudiante(e1);
grupo1.incorporaEstudiante(e2);
console.log(grupo1);