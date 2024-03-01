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