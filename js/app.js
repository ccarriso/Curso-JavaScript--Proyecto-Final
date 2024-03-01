/*Crea los arreglos que van a manejar los ingresos y los egresos
de la aplicación (elimina los arreglos que se habían creado para
poder realizar la prueba de las funciones). Para ello, define
la variable ingresos y egresos fuera de toda función (al principio
del archivo de ser posible) en el archivo app.js de la siguiente
manera:
• El objeto ingresos es un arreglo que instancia a la clase Ingreso
y recibe como parámetros, a manera de ejemplo, los valores
(‘Salario’, 20000) y (‘Venta auto’,50000).
• La constante egresos es un arreglo que crea dos objetos del tipo Egreso y recibe
como parámetros, a manera de ejemplo, los valores (‘Renta’, 4000) y (‘Ropa’, 800).*/


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

const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
};

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 });
};

const cargarCabecero = () => {
    

  /*Modifica la clase totalIngresos y recorre el arreglo ingresos
   con un ciclo for of. Asigna a la variable totalIngresos
   la suma del valor del elemento ingreso.*/


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

    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos () / totalIngresos ();

console.log(formatoMoneda(presupuesto));
console.log(formatoPorcentaje(porcentajeEgreso));
console.log(formatoMoneda(totalIngresos()));
console.log(formatoMoneda(totalEgresos()));
};

    cargarCabecero();