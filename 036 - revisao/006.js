let dia = 6;
let diaNome = '';
let msgDia = '';

if (dia < 6) {
   msgDia = "Bom trabalho"
} else {
   msgDia = "Bom fim de semana"
}

switch(dia) {
   case 1:
      diaNome = "Segunda-Feira";
      break
   case 2:
      diaNome = "Terça-Feira";
      break
   case 3:
      diaNome = "Quarta-Feira";
      break
   case 4:
      diaNome = "Quinta-Feira";
      break
   case 5:
      diaNome = "Sexta-Feira";
      break
   case 6:
      diaNome = "Sábado";
      break
   case 7:
      diaNome = "Domingo";
      break
   default:
      alert('Inválido')
}

document.getElementById('dia').innerHTML = "Hoje é " + diaNome + "\n - " + msgDia