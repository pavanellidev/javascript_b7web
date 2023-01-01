// - toString()

let lista = ['Uno', 'Palio', 'Strada', 'Siena'];

let res = lista.toString();

console.log(res);

// - join()

let lista2 = ['Celta', 'Astra', 'Corsa', 'S10'];

let res2 = lista2.join(' - ');

console.log(res2);

// indexOf()

let lista3 = ['Ka', 'Fiesta', 'Ranger', 'Focus'];

let res3 = lista3.indexOf('Fiesta')

console.log(res3);

// pop()

let lista4 = ['Uno', 'Palio', 'Strada', 'Siena'];

lista4.pop();

let res4 = lista4;

console.log(res4);

// shift()

let lista5 = ['Celta', 'Astra', 'Corsa', 'S10'];

lista5.shift()

let res5 = lista5;

console.log(res5);

// push()

let lista6 = ['Celta', 'Astra', 'Corsa', 'S10'];

lista6.push('Meriva')

let res6 = lista6;

console.log(res6);

// unshift()

let lista7 = ['Celta', 'Astra', 'Corsa', 'S10'];

lista7.unshift('Meriva')

let res7 = lista7;

console.log(res7);

// splice()

let lista8 = ['Uno', 'Palio', 'Strada', 'Siena'];

lista8.splice(1, 1, 'Fiorino');

let res8 = lista8;

console.log(res8);

// concat()

let lista9 = ['Ka', 'Fiesta', 'Ranger', 'Focus'];
let lista10 = ['Celta', 'Astra', 'Corsa', 'S10'];

let res9 = lista9.concat(lista10);

console.log(res9);

// sort()

let lista11 = ['dado', 'carro', 'banana', 'abacaxi'];

lista11.sort()

console.log(lista11)

// map()

let lista12 = [7, 14, 20, 32, 40];
let lista13 = [];

lista13 = lista12.map(function(item){
   return item * 2;
});

console.log(lista13);

// filter()

let lista14 = [7, 14, 20, 32, 40];
let lista15 = [];

lista15 = lista14.filter(function(item){
   if(item < 20) {
      return true
   } else {
      return false
   }
});

console.log(lista15);

// find()

let lista16 = [
   {id: 01, nome: 'João', sobrenome: 'Silva'},
   {id: 02, nome: 'Maria', sobrenome: 'Souza'},
   {id: 03, nome: 'Paulo', sobrenome: 'Santos'}
]

let pessoa = lista16.find(function(item){
   return (item.nome == 'Maria') ? true : false;
})

console.log(pessoa);