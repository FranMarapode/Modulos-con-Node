function parsearUrl(url) {
    try {

    const u = new URL(url) // Creamos el objeto URL con el parametro de la url dada

    let objeto = {
        host: "",
        pathname: "",
        parametros: {}
    };
        
    objeto.host = u.origin
    objeto.pathname = u.pathname

    u.searchParams.forEach((valor, tema) => {

        objeto.parametros[tema] = valor

    })

    return objeto;

    } catch (error) {
        console.error("Error al parsear la URL:", error.message);
        return null;
    }
    
}
module.exports = parsearUrl;