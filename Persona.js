
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