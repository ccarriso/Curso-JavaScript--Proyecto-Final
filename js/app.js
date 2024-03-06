import Ingreso from './Ingreso.js';
import Egreso from './Egreso.js';

let ingresos = [
     new Ingreso('Salario', 20000),
     new Ingreso('Venta auto',50000)
]

let egresos = [
    new Egreso('Renta', 4000),
    new Egreso('Ropa',800)
]

let porcentajeEgreso;

const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
};

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 });
};

const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
}

const totalIngresos = () => {
    let totalIngreso = 0;
    for (let i of ingresos) {
        totalIngreso+=i.valor;

    }       
    return totalIngreso;
};
    
const totalEgresos = () => {
    let totalEgreso = 0;
    for (let e of egresos) {         
    totalEgreso+=e.valor;
        
    }       
    return totalEgreso;
};

function cargarApp() {
    porcentajeEgreso = totalEgresos () / totalIngresos ();

    cargarCabecero();



//console.log(formatoMoneda(presupuesto));
  console.log(document.getElementById("presupuesto").innerHTML);
//console.log(formatoPorcentaje(porcentajeEgreso));
console.log(document.getElementById("porcentaje").innerHTML);
//console.log(formatoMoneda(totalIngresos()));
console.log(document.getElementById("ingresos").innerHTML);
//console.log(formatoMoneda(totalEgresos()));
console.log(document.getElementById("egresos").innerHTML);
}

cargarApp();