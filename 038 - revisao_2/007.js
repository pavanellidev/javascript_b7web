let pessoa = {
   nome: 'Bonieky',
   sobrenome: 'Lacerda',
   idade: 90,
   social: {
      facebook:'b7web',
      instagram: 'bonieky'
   },
   nomeCompleto: function() {
      return `${this.nome} ${this.sobrenome}`;
   }
};

let { social:{facebook}, sobrenome} = pessoa

console.log(facebook, sobrenome)

let [nome, sobrenome1] =  ['Bonieky', 'Lacerda'];

console.log(nome, sobrenome1);