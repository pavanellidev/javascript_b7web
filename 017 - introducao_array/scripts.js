const colors = ['red', 'blue', 'white', 'green'];

console.log(colors);

console.log(colors[2]);

const itens = [
   'camisa',
   'casaco',
   'calça',
   [ 'chinelo',
     'sapato',
     'tenis' ]
];

console.log(itens[3][1]);

const ingredientes = [
   'agua',
   'farinha',
   'ovo',
   'corante',
   'sal'
];

ingredientes.push('cebola');

console.log(ingredientes);

console.log(`Total de ingredientes: ${ingredientes.length}`);