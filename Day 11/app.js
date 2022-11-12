class Person {
  constructor(name, age, address, height, weight, gender) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.height = height;
    this.weight = weight;
    this.gender = gender;
  }
  displayData() {
    return console.log(
      `The Person is ${this.gender} with:\nName: ${this.name}\nAge: ${this.age}\nAddress: ${this.address}\nHeight: ${this.height}\nWeight: ${this.weight}\n`
    );
  }
}

class Man extends Person {
  constructor(name, age, address, height, weight, hasbeard) {
    super(name, age, address, height, weight, "Male");
    this.hasbeard = hasbeard;
  }
  displayData() {
    return console.log(
      `The Person is Male with:\nName: ${this.name}\nAge: ${this.age}\nAddress: ${this.address}\nHeight: ${this.height}\nWeight: ${this.weight}\nHas Beard: ${this.hasbeard}\n`
    );
  }
}

class Woman extends Person {
  constructor(name, age, address, height, weight, pregnancyStatus) {
    super(name, age, address, height, weight, "Female");
    this.pregnancyStatus = pregnancyStatus;
  }
  displayData() {
    return console.log(
      `The Person is Female with:\nName: ${this.name}\nAge: ${this.age}\nAddress: ${this.address}\nHeight: ${this.height}\nWeight: ${this.weight}\nIs Pregnant: ${this.pregnancyStatus}\n`
    );
  }
}

const newClass = new Person(
  "Nimesh",
  "18 Years",
  "Gwarko",
  "176 CM",
  "55 KG",
  "Male"
).displayData();

const newMan = new Man(
  "Nimesh",
  "18 Years",
  "Gwarko",
  "176 CM",
  "55 KG",
  "Yes"
).displayData();

const newWoman = new Woman(
  "Nimesh",
  "18 Years",
  "Gwarko",
  "176 CM",
  "55 KG",
  "No"
).displayData();