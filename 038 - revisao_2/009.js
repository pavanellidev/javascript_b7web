let numeros = [1, 2, 3, 4];

let outros = [...numeros, 5, 6, 7, 8]

console.log(outros);

let info = {
   nome:'André',
   sobrenome: 'Pavanelli',
   idade: 99
};

let novaInfo = {
   ...info,
   cidade: 'Bertioga',
   estado: 'São Paulo',
   pais: 'Brasil'
}

console.log(novaInfo);