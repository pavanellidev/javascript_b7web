function soltou (e) {
   console.log('Tecla Apertada: ' + e.code)
   console.log(e.shiftKey);
   console.log('--');
}

const input = document.querySelector('input');
input.addEventListener('keyup', soltou);