const input = document.querySelector('input');
const lista = document.querySelector('ul');

function adicionarTarefa() {
   const newLi = document.createElement('li');
   newLi.innerHTML = input.value;
   input.value = "";
   lista.appendChild(newLi);
}