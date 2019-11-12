

let getClimaByCiudad = async (ciudad)=>{
    let url =`http://api.openweathermap.org/data/2.5/forecast?q=${ciudad},pe&appid=f216cdc5ffb3839b7ebdb07394220bc1`
    let response = await fetch(url)
    let mijson = await response.json();
    return mijson;
}
 getClimaByCiudad("Arequipa").then((json)=>{
    console.log(json);
 })







