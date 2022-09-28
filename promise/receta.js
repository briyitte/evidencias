///receta para hacer arroz
class verReceta {
  constructor(nombre, ingredientes, procedimiento) {
    this._nombre=nombre;
    this._ingredientes=ingredientes;
    this._procedimiento=procedimiento;
  }
}


function Receta(nombre) {
  return new Promise((resolve, reject) => {
    console.log(`¿como hago un/a ${nombre}?`);
    resolve(nombre);
  });
}
Receta("arroz");
