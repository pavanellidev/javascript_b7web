let m2 = prompt('Quantos metros quadrados tem o imóvel?');
let quartos = prompt('Quantos quartos tem o imóvel?');

function calcularImovel (m2, quartos) {
   if (quartos == 1){
   return m2 * 3000;
   } else if (quartos == 2) {
   return m2 * (3000 * 1.2);
   } else if (quartos >= 3) {
   return m2 * (3000 * 1.3);
   }
}

let preco = calcularImovel(m2, quartos);

alert("O imóvel custa R$" + preco);
console.log(preco);