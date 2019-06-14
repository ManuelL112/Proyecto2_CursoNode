const porHacer = require('./porHacer/porHacer');
const colors = require('colors')

let opcion = 'borrar';

switch (opcion) {

    case 'crear':
        let tarea = porHacer.crear(opcion);
        console.log(tarea)
        break;
    case 'listar':

        let listado = porHacer.getListado();
        console.log('===========POR HACER==========='.green);
        for (let tarea of listado) {
            console.log('Tarea:  ', tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('___________________________'.red)
        }
        console.log('==============================='.green)

        break;
    case 'actualizar':
        let actualizar = porHacer.actualizar('crear', true);
        if (actualizar) {
            console.log('SE ACTUALIZO CORRECTAMENTE')
        } else {
            console.log('NO SE ENCONTRO REGISTRO')
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar('crear')
        console.log('BORRADO')
        break;
    default:
        console.log('Conmando Invalido');
}