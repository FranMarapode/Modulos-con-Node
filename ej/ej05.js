const parsearUrl = require('../functions/parsearUrl.js');
let objeto = parsearUrl('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo')
if (objeto) {
    console.log(objeto);
} else {
    console.log("No se pudo parsear la URL.");
}