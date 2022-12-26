class Person {

   age = 0;

   constructor(name){
      this.name = name;
   }

}

class Student extends Person {

   constructor(name, id){
      super(name);
      this.id = id;
   }

   sayHi(){
      console.log(`${this.name} diz Oi`);
   }

}

let p1 = new Student("João", 1);
p1.age = 30;

let p2 = new Student ("Pedro", 2);
p2.age = 40;

console.log(`${p1.name} tem ${p1.age} anos e matrícula ${p1.id}`)

console.log(`${p2.name} tem ${p2.age} anos e matrícula ${p2.id}`)

p1.sayHi();
p2.sayHi();