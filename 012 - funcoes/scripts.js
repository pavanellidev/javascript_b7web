// ENTRADA -> PROCESSAMENTO -> SAÍDA

function nomeCompleto(nome, sobrenome) {
   return `${nome} ${sobrenome}`;
}

let completo = nomeCompleto("André", "Pavanelli");

console.log("Nome completo: " + completo);


let idade = prompt('Digite a sua idade:');

function maiorDeIdade(idade) {
   if (idade >= 18) {
      return true;
   } else {
      return false;
   } 
}

let verificacao = maiorDeIdade(idade);

if(verificacao) {
   alert('É maior de idade.');
} else {
   alert('É menor de idade.');
}

