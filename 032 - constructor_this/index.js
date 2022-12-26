class Person {

   steps = 0;

   constructor(name, age){
      this.name = name;
      this.age = age;
   }

   takeAStep() {
      this.steps++;
   }

}

let p1 = new Person ("André", 35);
let p2 = new Person ("João", 40);
let p3 = new Person ("Maria", 52);

function darUmPasso() {
   for (let i = 0; i < 20; i++) {
      p1.takeAStep();
   }
}

darUmPasso();

console.log(`Passos de ${p1.name}: ${p1.steps}`);

