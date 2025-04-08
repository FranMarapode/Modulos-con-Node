const obtenerMoneda = require('../functions/moneda.js');

obtenerMoneda("Argentina")
    .then(moneda => {
        console.log("Moneda:", moneda);
    })
    .catch(err => {
        console.error("Error al obtener moneda:", err);
    });