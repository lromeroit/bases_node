//importamos la funcion con una desestructuración
const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();


 crearArchivoTabla( argv.b, argv.h, argv.l )
     .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
     .catch( err => console.log(err) );



//desestructuramos los parametros obteniendo --base=x
//lo almacenamos en la constante argv3 y le damos un default
//const [,, argv3 = 5] = process.argv;
//desestructuramos el array creado por el metodo split 
//que nos va a devolver --base y el valor (--base'='4)
//y almacenamos el valor en la const base
//const [, base] = argv3.split('=');


