import Ingreso from './Ingreso.js';
import Egreso from './Egreso.js';

let ingresos = [
    new Ingreso('Salario',20000),
    new Ingreso('Venta auto',50000),
    new Ingreso('Comisiones',5000)
]

let egresos = [
    new Egreso('Renta', 4000),
    new Egreso('Ropa',800),
    new Egreso('Colegiatura', 2800)
]

let porcentajeEgreso;

document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
    
    inputs.forEach(function(input) {
        input.addEventListener('focus', function() {
            input.value = "";
        });
    });
});

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

const cargarIngresos = () => {
    let ingresosHTML = '';
    let contIngresoId = 0;
    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso,contIngresoId);
        contIngresoId += 1;
    }
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingreso, ingresoId) => {
    let ingresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar_btn">
                    <ion-icon name="close-circle" onclick="eliminarIngreso(${ingresoId})"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
    return ingresoHTML;
};

const cargarEgresos = () => {
    let egresosHTML = '';
    let contEgresoId = 0;
    for (let egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso, contEgresoId);
        contEgresoId += 1;
    }
    document.getElementById("lista-egresos").innerHTML = egresosHTML;
};

const crearEgresoHTML = (egreso, egresoId) => {
    let egresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                <div class="elemento_porcentaje">21 %</div>
                <div class="elemento_eliminar">
                <button class="elemento_eliminar_btn">
                <ion-icon name="close-circle" onclick="eliminarEgreso(${egresoId})"></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return egresoHTML;
};

const agregarDato = () => {
    let forma = document.getElementById("forma").value;
    let tipo = document.getElementById("tipo").value;
    let descripcion = document.getElementById("descripcion").value;
    let valor = parseFloat(document.getElementById("valor").value);
    if (descripcion.trim() !== '' && !isNaN(valor)) {
        if (tipo === "ingreso") {
            ingresos.push(new Ingreso(descripcion, valor, forma));
            cargarIngresos();
        } else {
            egresos.push(new Egreso(descripcion, valor, forma));
            cargarEgresos();
        }

        cargarCabecero();
    }
};

const eliminarIngreso = (id) => {
    ingresos.splice(id, 1);
    cargarCabecero();
    cargarIngresos();
};

const eliminarEgreso = (id) => {
    egresos.splice(id, 1);
    cargarCabecero();
    cargarEgresos();
    };

function cargarApp() {
    porcentajeEgreso = totalEgresos () / totalIngresos ();

    cargarCabecero();
    cargarIngresos();
    cargarEgresos();

console.log(document.getElementById("presupuesto").innerHTML);
console.log(document.getElementById("porcentaje").innerHTML);
console.log(document.getElementById("ingresos").innerHTML);
console.log(document.getElementById("egresos").innerHTML);

}

window.cargarApp = cargarApp;
window.eliminarEgreso = eliminarEgreso;
window.eliminarIngreso = eliminarIngreso;
window.agregarDato = agregarDato;