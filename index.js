function InstagramPost(handle, content, imageLink, views, likes) {
    this.handle = handle;
    this.content = content;
    this.imageLink = imageLink;
    this.views = views;
    this.likes = likes;
  }
  
const post1 = new InstagramPost('arsenal', 'The best team in premier league!', 'https://www.instagram.com/p/CpE9Xy9IIXT/', 1000, 50);
const post2 = new InstagramPost('liomessi', 'Greatest moment in football history!', 'https://www.instagram.com/p/CmUv48DLvxd//', 120000000, 50);


console.log(post1.handle); 
console.log(post1.content); 
console.log(post1.imageLink); 
console.log(post1.views); 
console.log(post1.likes);

console.log(post2.handle);
console.log(post2.content);
console.log(post2.imageLink);
console.log(post2.views);
console.log(post2.likes);

// Factory function creating a person object
function createPerson(name, age, location) {
    return {
      name: name,
      age: age,
      location: location
    };
  }
  
  // Factory function creating JAMB scores object
  function createJambScores(eng, govt, lit, crk) {
    return {
      eng: eng,
      govt: govt,
      lit: lit,
      crk: crk
    };
  }
  
  // Create an object representing Musa using the createPerson() factory function
  const musa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos State');
  
  // Create an object representing Musa's JAMB scores using the createJambScores() factory function
  const musaScores = createJambScores(70, 85, 82, 94);
  
  // Add the JAMB scores object to the Musa object as a property
  musa.scores = musaScores;

console.log(musa.name); // "Musa Dawodu"
console.log(musa.age); // 19
console.log(musa.location); // "Lekki, Lagos State"
console.log(musa.scores.eng); // 70
console.log(musa.scores.govt); // 85
console.log(musa.scores.lit); // 82
console.log(musa.scores.crk); // 94

// Object.assign() method: This method copies all enumerable own properties from one or more source objects to a target object and returns the target object.
const obj1 = { name: "John", age: 25 };
const obj2 = Object.assign({}, obj1); // Cloning obj1 into obj2

console.log(obj2); // { name: "John", age: 25 }

// Spread operator: This operator allows you to spread the properties of an object into another object
const objj1 = { name: "John", age: 25 };
const objj2 = { ...objj1 }; // Cloning obj1 into obj2

console.log(objj2); // { name: "John", age: 25 }

// JSON.parse() and JSON.stringify() methods: These methods convert an object to a JSON string and then parse the JSON string back into an object, creating a new object in the process

const objjj1 = { name: "John", age: 25 };
const objjj2 = JSON.parse(JSON.stringify(objjj1)); // Cloning obj1 into obj2

console.log(objjj2); // { name: "John", age: 25 }

// Object.create() method: This method creates a new object with the specified prototype object and properties
const objjjj1 = { name: "John", age: 25 };
const objjjj2 = Object.create(objjjj1); // Cloning obj1 into obj2

console.log(objjjj2); // {}
console.log(objjjj2.name); // "John"
console.log(objjjj2.age); // 25


const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
};


 