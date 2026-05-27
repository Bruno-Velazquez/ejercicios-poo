class Animal {

  nombre: string;

  constructor(nombre: string) {

    this.nombre = nombre;
  }

  hacerSonido() {

    return "El animal hace un sonido";
  }
}

class Perro extends Animal {

  ladrar() {

    return "Guau";
  }
}

let perro = new Perro("Firulais");

console.log(perro.nombre);

console.log(perro.hacerSonido());

console.log(perro.ladrar());