// creates a Car class object
class Car {
  // this Car class expects a brand upon creation
  constructor(brand) {
    // the car brand provided is then saved as a carname attribute to the instance.
    this.carname = brand;
  }
  // present() is a class instance function that is called on the instance
  present() {
    // this function (or method), when called, would return the string 'I have a ' and the brand name of the instance
    // when it was created.
    return 'I have a ' + this.carname;
  }
}

// creates a Model class object that inherits from Car class, thus inheriting the functions of the Car class
class Model extends Car {
  // upon creating, Model class instance is expected to have a brand and mod passed to it.
  constructor(brand, mod) {
    // refers to the parent class and its attribute thus possessing the same attribute carname inherited
    // from its parent (Car) class
    super(brand);
    // the mod passed upon creation is saved as the instance's .model attribute
    this.model = mod;
  }
  // in addition to the the parent class' (Car) functions, the function (or method) below would also be available to the instances
  // created by this class object.
  show() {
    // the function calls the .present() method originated from Model's parent class which should return a string,
    // in addition to that, the string 'it was made in ' and the instance's model are appended.
    return this.present() + ', it was made in ' + this.model;
  }
}

// creates a variable named makes that holds an array of values
let makes = ["Ford", "Holden", "Toyota"];
// two other ways of creating an array is using new Array(arrayLength) constructor and the Array.from(arrayLike, mapFunc)
// new Array(40) would create an array that has a length of 40
// the array created is passed with a function that would fill its index with values (the values of which are from the returned value of the function is in this case is 1980 plus the number of iteration (i))
// thus creating a new array using Array.from()
let models = Array.from(new Array(40), (x, i) => i + 1980);

// a declared function that accepts two arguments, a min number and a max number
function randomIntFromInterval(min, max) { // min and max included
  // Math.random() returns a number in between 0 and 1.
  // the difference of max number and min number added by 1 plus the minimum number is then multiplied to the returned number between 0 and 1.
  // finally, it is rounded down to the nearest whole number and is returned out of the function
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// a new ES6 syntax of looping through an array. Commonly known as the for..of syntax and is used mainly with arrays
// iterates on every element in models array and is assigned to the variable model
for (model of models) {
  // using 0 min number and the makes' array length less 1 as its max number, the number returned from this
  // function is then passed as an index to the makes array which should extract the value from the said array
  // and put in the make variable.
  make = makes[randomIntFromInterval(0, makes.length - 1)];
  // almost the same as above except through the models array and its attributes and elements.
  model = models[randomIntFromInterval(0, models.length - 1)];

  // creates a new instance of the Model class using the make varible from above as its brand and model from above as its model
  mycar = new Model(make, model);
  // logs to the console the returned string from invoking the .show() method on the mycar instance declared in the previous line.
  console.log(mycar.show());
}

