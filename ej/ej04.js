const fs = require('fs');
const original = '../txt/rename-me.txt';
const nuevo = '../txt/renamed.txt';

const contenido = fs.readFileSync(original, 'utf8')
console.log(contenido)  

fs.rename(original, nuevo);
console.log('Archivo renombrado');