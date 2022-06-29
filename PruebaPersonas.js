
// --------------------------CLASE PADRE PERSONA--------------------------  

class Persona{
    // atributo estatico 
    static contadorPersonas= 0;
    // creamos atributos no estaticos con el constructor 
    constructor(nombre,apellido,edad){
        this._idPersona =++Persona.contadorPersonas;
        this._nombre =nombre;
        this._apellido =apellido;
        this._edad =edad;
    }
    // creamos metodos get and set de cada atributo
    get idPersona(){
        return this._idPersona;
    }
    // METODOS PARA PERSONA 
    //NOMBRE 
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    //APELLIDO 
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    // EDAD 
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad= edad;
    }
    // METODO TOSTRING 
    toString(){
        // usando template String 
        return `${this._idPersona}
                ${this.nombre} 
                ${this._apellido} 
                ${this._edad}`;
    }

}

// --------------------------CLASE HIJA CLIENTE--------------------------  
class Cliente extends Persona{
    static contadorClientes =0;
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad)
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
     }
     get idCliente(){
        return this._idCliente;
     }
     get fechaRegistro(){
        return this._fechaRegistro;
     }
     set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
     }
     toString(){
        return `${super.toString()}
                ${this._idCliente} 
                ${this._fechaRegistro}`;
     }
}
// --------------------------CLASE HIJA EMPLEADO--------------------------  
class Empleado extends Persona{
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad,sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return `${super.toString()}
                ${this._idEmpleado} 
                ${this._sueldo}`;
    }
}
// --------------------------PRUEBAS--------------------------  
// Creacion de objetos de tipo persona 
let persona1 = new Persona("juan ", "perez",28 );
console.log(persona1.toString());

let persona2 = new Persona("carlos ", "ramirez",35 );
console.log(persona2.toString());

// Creacion de objetos de tipo empleado
let empleado1 = new Empleado("jorge", "benavides",35,"1500" );
console.log(empleado1.toString());

let empleado2 = new Empleado("laura", "benavides",28,"500" );
console.log(empleado2.toString());

// Creacion de objetos de tipo cliente

let cliente1 = new Cliente("Miguel","cervantes",30,new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente("Mara","lara",34,new Date());
console.log(cliente2.toString());
