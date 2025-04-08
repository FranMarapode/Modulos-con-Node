const axios = require('axios');
const https = require('https');

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

async function obtenerMoneda(nombrePais) {
  const apiKey = 'aUtmHbSyQeKbIZDrPRSHRAqCS4ec1Da24iSj0S90';
  const url = `https://countryapi.io/api/name/${nombrePais}?apikey=${apiKey}`;

  const response = await axios.get(url, { httpsAgent });
  const data = response.data;

  const clavePais = Object.keys(data)[0];
  const monedas = data[clavePais].currencies;
  const codigoMoneda = Object.keys(monedas)[0];
  const nombreMoneda = monedas[codigoMoneda].name;

  return nombreMoneda;
}

module.exports = obtenerMoneda;