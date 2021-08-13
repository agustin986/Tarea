const os=require('os');

console.log('Espacio de memoria:'+os.freemem());
const perro = [];
for (let i=0;i<1000000;i++){
    perro.push(i);
}
console.log("Espacio libre post vector: "+os.freemem());