function Dinosaur(attr) {
    this.name = attr.name;
    this.diet = attr.diet;
    this.weight = attr.weight;
    this.length = attr.length;
    this.period = attr.period;
  }
  



const tyran = new Dinosaur ({
    name: "tyrannosaurus",
    diet: "carnivorous",
    weight: "7000kg",
    length: "12m",
    period: "Late Cretaceious", 
});

console.log(tyran.weight);

const steg = new Dinosaur ({
    name: "stegosaurus",
    diet: "herbivorous",
    weight: "2000kg",
    length: "9m",
    period: "Late Jurassic", 
});

console.log(steg.length);

const velo = new Dinosaur ({
    name: "velociraptor",
    diet: "carnivorous",
    weight: "15kg",
    length: "1.8m",
    period: "Late Cretaceious", 
});

console.log(velo.diet)
console.log (tyran.period)

