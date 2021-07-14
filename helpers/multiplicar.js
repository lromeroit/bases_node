const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = (base = 5, hasta, listar) => {
    return new Promise( (resolve, reject) => {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta ; i++) {
            let result = base * i;
            salida += `${base} x ${i} = ${result}\n`;
            consola += `${base} ${ 'x'.green } ${i} = ${result}\n`;
        }

        let archivo = `./output/tabla-${ base }.txt`;

        try{
            //pasamos como parametro nombre de archivo, datos
            fs.writeFileSync(archivo, salida);
            if (listar) {
                console.log('=============='.green);
                console.log(' Tabla del', colors.magenta(base) );
                console.log('=============='.green);
                console.log(consola);    
            }
            resolve(archivo)
        } catch(err){
            reject('hubo un error', err)
        }
    });
    

}




module.exports = {
    /*se puede exportar la "clave" del objeto
     crearArchivo : crearArchivoTabla
    pero como es el mismo nombre ej:
     crearArchivoTabla : crearArchivoTabla
    es6 nos deja simplificar la declaración:*/
    crearArchivoTabla
}
