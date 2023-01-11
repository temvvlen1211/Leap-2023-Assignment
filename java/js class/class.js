class Person {
  name;
  age;
  height;
  gender;
  constructor(eyes, hand, foot) {
    this.eyes = eyes;
    this.hand = hand;
    this.foot = foot;
  }
}

class Oyutan extends Person {
  constructor() {
    super("true", "true", "true");
    this.name = "Tengis";
    this.age = 18;
    this.height = "180cm";
    this.gender = "male";
  }
}

console.log(new Oyutan());
