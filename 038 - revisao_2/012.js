// Código Síncrono

let nome = 'bonieky';
let sobrenome = 'lacerda';
let completo = nome + ' ' + sobrenome;

// Código Assíncrono

let nome1 = 'bonieky';
let sobrenome1 = 'lacerda';
// let temperatura = maquininha.pegarTemperatura(); // Assinc.
let completo1 = nome1 + ' ' + sobrenome1; 

// Callback - chamar de novo

function alertar() {
   alert('Opa, tudo bem?')
}

setTimeout(alertar, 2000)

