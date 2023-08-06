
const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path/posix')
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false , hasta = 10 ) => { 

    try {

        let salida = ''
        let consola = ''
        for (let index = 1; index <= hasta; index++) {
            
            salida += `${base} X ${index} = ${base * index} \n`
            consola += `${base} ${'X'.red} ${index} ${'='.blue} ${base * index} \n`
            
        }

        if( listar ){
            console.log('==========='.green)
    
            console.log('')
        
            console.log( colors.blue(`Tabla del: ${base}`) )
        
            console.log('')
        
            console.log('==========='.green)
        
            console.log('')

            console.log( consola );
        }      
    
        let fileName = `./output/tabla-${base}.txt`
        fs.writeFileSync( fileName , salida)
        return fileName

    } catch (error) {
        throw error   
    }

}

module.exports = {
    crearArchivo
}