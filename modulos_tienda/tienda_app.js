const clientes = require('./clientes.js');
const vendedor = require('./vendedor.js');
const categoria = require('./categoria.js');
const productos = require('./productos.js');
const factura = require('./factura.js');
const cotizacion = require('./cotizacion.js');
const stock = require('./stock.js');
const oferta = require('./oferta.js');
const proveedores = require('./proveedores.js');
////fase 1 prueba sin funciones
console.log(typeof(clientes));
const clientes1 = new clientes('Lucas', '111222', '312 456096', 'abcde@gmail.com', 'Micabeza');
console.log(clientes1);
const vendedor1 = new vendedor('armando', '3335567', '321 480844', 'jojojo@gmail.com', '0A91');
console.log(vendedor1);
const categoria1 = new categoria('2031', 'accesorio');
console.log(categoria1);
const productos1 = new productos('01', 'accesorio', '0001', 'tapete', 'niguna', 'tela impermeable',
    '100000');
console.log(productos1);
const factura1 = new factura('01', 'accesorio', 'niguna', 'tela', '20000', '001', 'nombre cliente',
    'cantidad', '938493', 'PSE');
console.log(factura1);
const coti1 = new cotizacion('001', 'Juan', '2', '24000', 'pse', '2 meses', '33%');
const stock1 = new stock('2424', 'vidrio', 'hyundai', 'vidrio', '24000', '10');
const oferta1 = new oferta('10:30', '23:00', '15%', '2031', 'accesorio', 'vidrio', '24000');
const proveedor3 = new proveedores('464643', 'constructor', 'bombillo',
    'constructor@exampke.com', 'tapetes', '00022', '10/07/2022');
console.log(coti1);
console.log(stock1);
console.log(oferta1);
console.log(proveedor3);
/////fase 2 prueba con funciones T-T