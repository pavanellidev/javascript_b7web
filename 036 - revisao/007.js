let texto = '';
let carros = ['fusca', 'uno', 'porsche', 'ferrari']

for (let i = 0; i <= 10; i++) {
   texto = texto + i + '<br/>';
}

document.getElementById('demo').innerHTML = texto;

let html = '<ul>'

for (let x = 0; x < carros.length; x++) {
   html += '<li>' + carros[x] + '</li>'
}

html += '</ul>'

document.getElementById('demo2').innerHTML = html