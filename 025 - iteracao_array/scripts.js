let fruits = ['banana', 'laranja', 'maçã', 'uva'];

if (fruits.includes('uva')) {
   console.log('Tem uva sim!');
}  else {
   console.log('Não tem uva...');
}

let dinheiro = ['durateston', 'deca', 'whey', 'creatina'];

let ok = dinheiro.some((value) => {
   return value.length > 12;
});

if (ok) {
   console.log('Todos tem mais que R$ 250');
} else {
   console.log('Nem todos tem mais que R$ 250');
}