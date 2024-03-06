//const contadorIngresos = 0;
import Dato from './Dato.js';

class Ingreso extends Dato {
    static contadorIngresos = 0;
    
    constructor(descripcion, valor) {
        super(descripcion, valor); 
       // this._id = this.contadorIngresos + 1;
    }    

    get _id () {
        return this._id;
    }
}
export default Ingreso;

const cargarIngresos = () => {
    let ingresosHTML = ''; // Declara la variable vacía ingresosHTML
    
    // Recorre el arreglo ingresos con un ciclo for of
    for (const ingreso of ingresos) {
        // Concatena el resultado de la función crearIngresoHTML
        ingresosHTML += crearIngresoHTML(ingreso);
    }

    // Recupera el elemento lista-ingresos por su id y asigna el contenido de la variable ingresosHTML
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};
