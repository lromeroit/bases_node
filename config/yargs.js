const argv = require('yargs')
    .option('b', {
        alias: 'base',
        default: 5,
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h',{
        alias: 'hasta',
        default: 10,
        type: 'number',
        describe: 'Hasta el numero que se multiplicará',
        demandOption: false
    })
    .option('l', {
        alias: 'listar',
        default: false,
        type: 'boolean',
        describe: 'Muestra la tabla por consola'
    })
    .check( (argv, options) => {
        if( isNaN( argv.b ) ) {
            throw 'La base debe ser un número'
        } else{
            return true;
        }
    })
            .argv;

module.exports = argv;