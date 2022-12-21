let pessoa = {
   nome: 'Bruce',
   sobrenome: 'Lee',
   idade: 30,
   nomeCompleto: function () {
      return this.nome + ' ' + this.sobrenome;
   }
}

console.log(pessoa.nomeCompleto());