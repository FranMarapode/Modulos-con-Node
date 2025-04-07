const parsearUrl = require('../functions/parsearUrl.js');
let objeto = parsearUrl('')
if (objeto) {
    console.log(objeto);
} else {
    console.log("No se pudo parsear la URL.");
}