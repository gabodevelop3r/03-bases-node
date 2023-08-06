
const { crearArchivo } = require('./helpers/multiplicar.js')
const argv = require('./config/yargs.js')
require('colors');

console.clear()

crearArchivo( argv.base, argv.listar, argv.hasta )
            .then((fileName) => console.log(fileName.rainbow))
            .catch((err)=> console.log(err.red))
