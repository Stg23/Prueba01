// con solo colocar Async la funcion se convierte en una promesa.

let buscarCiudad = async (nombre) => {

    // return "hola", este retorna el mensaje ne el then
    // throw "Hola", este retorna el mensaje ne el catch

    if (nombre === "Arequipa,pe") {
        return "correcto se resivio Arequipa"
    } else {
        throw "error no se resivio Arequipa"
    }

}
buscarCiudad("Arequipa,pe").then(rpta => {
    console.log("then");
    console.log(rpta);

}).catch(error => {
    console.log("catch");
    console.log(error);

})

// -----------------------------------------------------------//

let consultarApi = async (numero) => {
    switch (numero) {
        case 1:
            return "1 uno"
        case 2:
            return "2 dos"
        case 3:
            return "3 tres"
        default:
            throw "#%$ ¡error!"
    }
}

let devolverMayusculas = async (palabra)=>{
    return palabra.toUpperCase();
}


let consumirApis= async () => {
    let x = await consultarApi(2);
    let mayus = devolverMayusculas(x);
    return mayus;
}

consumirApis().then(rpta=>{
    console.log(rpta);
})