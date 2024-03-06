class Dato {
    constructor(descripcion, valor) {
        this._descripcion = descripcion;
        this._valor = valor;
    }
    
get descripcion() {
    return this._descripcion;
}
set descripcion(newDescripcion){
    return this._descripcion = newDescripcion;
/* set descripcion(newDescripcion) {
    return this._descripcion['_descripcion'] = newDescripcion;
   }*/

}

get valor() {
    return this._valor;
}

set valor(newValor){
    return this._valor = newValor;
/* set valor(newValor) {
    return this._valor['_valor'] = newValor;
   }*/

}
}

export default Dato;