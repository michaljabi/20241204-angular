

class Cat {
  name: string = '';
}

class Fish {
  name: string = '';
  canSwim = true;
}

// Niemożliwe w Java / C# [!]
const myCat: Cat = new Fish();

// C# / Java -> kim/ czym jesteś? (nominał)

// TS -> jaki masz kształt? co robisz (struktura)

// const myFish: Fish = new Cat();
