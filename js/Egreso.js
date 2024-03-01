//const contadorEgresos = 0;
import Dato from './Dato.js';

class Egreso extends Dato {
    static contadorEgresos = 0;
    
    constructor(descripcion, valor) {
    super(descripcion, valor); 
   // this._id = ++this.contadorEgresos;

}    
get _id () {
    return this._id;
}
}
export default Egreso;