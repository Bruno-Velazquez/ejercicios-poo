function Persona(nombre: string, edad: number) {

  this.nombre = nombre;
  this.edad = edad;

  this.saludar = function() {
    return "Hola, mi nombre es " + this.nombre;
  };
}

let persona1 = new Persona("Juan", 25);

let persona2 = new Persona("María", 30);

console.log(persona1.saludar());

console.log(persona2.saludar());