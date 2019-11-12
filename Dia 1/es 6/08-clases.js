class persona {
    _nombre; 
    _apellido;
    _edad;
    constructor(nom,ape,ed){
        this._nombre=nom;
        this._apellido=ape;
        this._edad=ed;
    }

    get nombre(){
        return this._nombre
    }
    set nombre(nom){
        this._nombre=nom;
    } 
    static imprimirAñoActual(){
        console.log((new Date()).getFullYear());
        
    }
}

let objJuan = new persona("Juan","Rodrigez",23);
console.log(objJuan.nombre);

objJuan.nombre = "Juanito";
console.log(objJuan.nombre);

persona.imprimirAñoActual();
