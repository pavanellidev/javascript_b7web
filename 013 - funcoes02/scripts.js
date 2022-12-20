let x = prompt('Digite o primeiro número:');
let y = prompt('Digite o segundo número:');

function porcentagem(x, y) {
   return (y / x) * 100;
}

let result = porcentagem(x, y);

alert(y + " é " + result + "% de " + x);