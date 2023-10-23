require('colors');

const mostrarMenu = () =>{

    return new Promise((resolve => {
        console.clear();
        console.log('========================='.green);
        console.log('   Seleccione una opción'.green);
        console.log('=========================\n'.green);
    
        console.log(`${ '1.'.green } Crear tarea`);
        console.log(`${ '2.'.green } Listar tarea`);
        console.log(`${ '3.'.green } Listar Tarea Completada`);
        console.log(`${ '4.'.green } Listar Tareas Pendientes`);
        console.log(`${ '5.'.green } Completar Tarea(s)`);
        console.log(`${ '6.'.green } Borrar tarea`);
        console.log(`${ '0.'.green } Salir \n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Seleccione una opción: ', (opt) => {
            //console.log({opt});
            readline.close();
            resolve(opt);
        })
    }));

   
}

const pausa = () =>{

    return new Promise((resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${'Enter'.green} para continuar\n`, (opt) => {
            readline.close();
            resolve();
        })

    }))
   

}

module.exports={
    mostrarMenu,
    pausa
}