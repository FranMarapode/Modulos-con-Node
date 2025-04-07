const obtenerMoneda = require('../functions/moneda.js');

obtenerMoneda("Brazil")
    .then(moneda => {
        console.log("Moneda:", moneda);
    })
    .catch(err => {
        console.error("Error al obtener moneda:", err);
    });