



const graduates = [{
    "id": 1,
    "first_name": "Cynde",
    "university": "Missouri Southern State College",
    "email": "ctorry0@macromedia.com"
  },
  {
    "id": 2,
    "first_name": "Saundra",
    "university": "The School of the Art Institute of Chicago",
    "email": "swhal1@state.gov"
  },
  {
    "id": 3,
    "first_name": "Lambert",
    "university": "Marian College",
    "email": "lparham2@techcrunch.com"
  },
  {
    "id": 4,
    "first_name": "Modestine",
    "university": "International Medical & Technological University",
    "email": "mdolder3@symantec.com"
  },
  {
    "id": 5,
    "first_name": "Chick",
    "university": "Sultan Salahuddin Abdul Aziz Shah Polytechnic",
    "email": "camorts4@google.com.au"
  },
  {
    "id": 6,
    "first_name": "Jakob",
    "university": "Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft",
    "email": "jharken5@spiegel.de"
  },
  {
    "id": 7,
    "first_name": "Robbi",
    "university": "Salem University",
    "email": "rbrister6@redcross.org"
  },
  {
    "id": 8,
    "first_name": "Colline",
    "university": "Coastal Carolina University",
    "email": "cbrosh7@alibaba.com"
  },
  {
    "id": 9,
    "first_name": "Michail",
    "university": "Universidad Católica de Ávila",
    "email": "mrome8@shinystat.com"
  },
  {
    "id": 10,
    "first_name": "Hube",
    "university": "Universitat Rovira I Virgili Tarragona",
    "email": "hlethbrig9@foxnews.com"
  }
]

/* Request 1: Create a new array called universities that contains all the univeristies in the graduates array.  

Once you have the new array created, sort the universities alphabetically and log the result. */

const universities = [];
for (i=0; i< graduates.length; i++) {
  universities.push(graduates[i].university);
}

console.log(universities);

const contactInfo = [];

for (i = 0; i < graduates.length; i++) {
  contactInfo.push(graduates[i].first_name + ' ' + graduates[i].email);
}

console.log(contactInfo);

class CuboidMaker{
    constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }
  volume() {
    return (this.length * this.width * this.height);
  }
  
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
} 
  

let cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
  });
  

console.log(cuboid.volume());
console.log(cuboid.surfaceArea())
