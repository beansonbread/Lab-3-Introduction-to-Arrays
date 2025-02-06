let animals = ["cat", "dog", "rabbit", "frog", "chicken"]

//accessing arrays
console.log(animals.at(0));
console.log(animals.at(4));
console.log(animals.at(2));

//storing variables
let animalFirst= animals.at(0);
let animalLast = animals.at(4);
let animalMiddle = animals.at(2);

//using array properties
console.log(`the length of this array is -`, animals.length);

//array methods
    //pop
let lastAnimal = animals.pop();
console.log(lastAnimal);

    //push
animals.push("hamster");
console.log(animals);

    //slice
let commonPets = animals.slice(0,2)
console.log(commonPets);

//iterating loops
    //traditional
for (let a=0; a < animals.length; a++) {
    console.log(animals[a]);
}

    //for...of
for (const animal of animals) {
    console.log(animal);
}

//array destructuring
let [firstAnimal, secondAnimal, ...rest] = animals;
console.log(firstAnimal);
console.log(secondAnimal);
console.log(rest);


