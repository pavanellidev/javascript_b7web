function verde(){
   document.querySelector('#exemplo').classList.remove('vermelho')
   document.querySelector('#exemplo').classList.remove('azul')
   document.querySelector('#exemplo').classList.add('verde');
}



function vermelho(){
   document.querySelector('#exemplo').classList.remove('verde')
   document.querySelector('#exemplo').classList.remove('azul')
   document.querySelector('#exemplo').classList.add('vermelho');
}



function blue(){
   document.querySelector('#exemplo').classList.remove('verde')
   document.querySelector('#exemplo').classList.remove('vermelho')
   document.querySelector('#exemplo').classList.add('azul');
}

function trocar() {
   if (document.querySelector('#botao').classList.contains('preto')) {
      document.querySelector('#botao').classList.remove('preto');
      document.querySelector('#botao').classList.add('roxo');
   } else {
      document.querySelector('#botao').classList.remove('roxo');
      document.querySelector('#botao').classList.add('preto');
   }

}