console.log("Hola mundo NODE");

let edad= 29;
let edad2= 0;

console.log("Edad promedio: ");
console.log((edad+edad2)/2);

console.log("Medidor de Procesos");

console.time('miProceso');
    for(let i=0 ;i< 100000000; i++){}
console.timeEnd('miProceso');