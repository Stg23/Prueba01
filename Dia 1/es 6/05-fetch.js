let url ="http://api.openweathermap.org/data/2.5/forecast?q=Arequipa,pe&appid=f216cdc5ffb3839b7ebdb07394220bc1"

// consuminedo una api con fetch y el verbo get
// 
fetch(url).then((response)=>{
    return response.json();
}).then((objJson)=>{
console.log(objJson);
})

// ----------------------FECHT CON POST----------------------//

fetch("https://reqres.in/api/users",{
    method: 'POST',
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify({name:'Stg',job:'Student'})
}).then((response)=>{
    return response.json();
}).then(data=>{
 console.log(data);
})

