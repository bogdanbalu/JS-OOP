console.log("Declara o clasa prin care sa reprezinți obiectul numit Mașina");

class Masina {
  constructor(marca, model, culoare, kilometraj) {
    this.marca = marca;
    this.model = model;
    this.culoare = culoare;
    this.kilometraj = kilometraj;
  }
  
  getProprietati() {
    return `Masina[marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, ${this.kilometraj}]`;
  }
}
const masina = new Masina("Rolls-Royce", "Phantom", "Negru", 234000);
const masina1 = new Masina("Mercedes", "S-Klasse", "Negru", 200000);
const masina2 = new Masina("Skoda", "Superb", "mov", 120000);

console.log(masina.getProprietati());

const main = () => {
  console.log(masina.getProprietati(), masina1.getProprietati(), masina2.getProprietati());
};

main();

console.log("\n");

console.log("Definește încă o clasa numita MasinaDeCurse");

class MasinaDeCurse extends Masina {
  constructor(marca, model, culoare, kilometraj) {
    super(marca, model, culoare, kilometraj);
  }
  participaLaCampionat = (pozitiaInCampionat) => {
    if (pozitiaInCampionat > 0) {
      console.log("Am castigat locul", pozitiaInCampionat);
    } else {
      console.log("Nu am castigat niciun premiu");
    }
  };
}

const m1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000);

m1.participaLaCampionat(30);
m1.participaLaCampionat(-1);

const masinaRosie = new MasinaDeCurse("Nissan", "GT-R", "Gri", 130000);
const masinaVerde = new MasinaDeCurse("Loamborghini", "Huracan", "Rosu", 120000);

deCurse = () => {
  console.log(masinaRosie.proprietati);
  masinaRosie.participaLaCampionat(10);
  console.log(masinaVerde.proprietati);
  masinaVerde.participaLaCampionat(0);
};
deCurse();



