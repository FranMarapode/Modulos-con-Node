const numeroPi = Math.PI;

const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const multiplicacion = (num1, num2) => num1 * num2;
const calcularCircunferencia = (radio) => {
    return 2 * numeroPi * radio;
}

module.exports = {suma, resta, multiplicacion, calcularCircunferencia};