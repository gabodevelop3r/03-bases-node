const argv = require('yargs')
                        .option('h', {
                            alias: 'hasta',
                            default: 10,
                            describe: 'Ingresar hasta donde se debe multiplicar',
                            type: 'number'
                        })
                        .check((argv, options) => {
                               
                            if ( isNaN(argv.b) ) {
                               throw 'Invalid'
                            } 
                            return true
                        })
                        .option('l', {
                            alias: 'listar',
                            demandOption: true,
                            describe: 'Muestra la tabla de multiplicación en consola',
                            type: 'boolean',
                            default: false
                        })
                        .option('b', {
                                    alias: 'base',
                                    demandOption: true,
                                    describe: 'Numero base para la multiplicación',
                                    type: 'number'
                                })
                        .check((argv, options) => {
                               
                                    if ( isNaN(argv.b) ) {
                                       throw 'Invalid'
                                    } 
                                    return true
                                })
                                .argv;

module.exports = argv
