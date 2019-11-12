let inputBusqueda = document.getElementById("inputBusqueda");
let btnBuscar = document.getElementById("btnBuscar");

let buscarCiudadPorNombre=(nombre)=>{
    return new Promise((resolve,reject)=>{
        let xhr =new XMLHttpRequest();
        xhr.onreadystatechange=()=>{
            if (xhr.readyState===4 && xhr.status === 200) {
                resolve(xhr.responseText);
            }
            if (xhr.readyState===4 && xhr.status === 404) {
                reject("No se ha encontrado la ciudad")
            }
        }
        xhr.open("GET",`http://api.openweathermap.org/data/2.5/forecast?q=${nombre},pe&appid=f216cdc5ffb3839b7ebdb07394220bc1`)
        xhr.send(null);
    });
}
/**
 * funcion que recibe un objeto como el que retorna
 * @param {*} jsonWeather 
 */
let obteberinfo=({city:{country,name,population,coord:{lat,lon}}})=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let objInfo={
                ciudad: name,
                pais:country,
                poblacion:population,
                latitud:lat,
                longitug:lon
            }
            resolve(objInfo);
        }, 1000);
    });
}


btnBuscar.onclick=()=>{
    buscarCiudadPorNombre(inputBusqueda.value).then((rpta)=>{
        let jsonRpta = JSON.parse(rpta);
        return obteberinfo(jsonRpta);
        }).then((objInfo)=>{
        console.log(objInfo);
        })
}