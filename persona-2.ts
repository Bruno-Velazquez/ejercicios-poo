function Persona(nombre: string, edad: number) {

  this.nombre = nombre;
  this.edad = edad;
}

Persona.prototype.caminar = function() {

  return "Estoy caminando";
};

let persona1 = new Persona("Juan", 25);

console.log(persona1.caminar());