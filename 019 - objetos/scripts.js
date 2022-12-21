let personagem = {
   nome: 'Stallone',
   idade: 70,
   pais: 'EUA',
   olhos: ['preto', 'azul'],
   caracteristicas: {
      forca: 20,
      magia: 5,
      stamina: 15
   },
   carros: [
      {marca: 'Fiat', modelo: 'Uno'},
      {marca: 'Ford', modelo: 'Ka'},
      {marca: 'Chevrolet', modelo: 'Celta'}
   ]
}

console.log(`${personagem.nome} tem ${personagem.idade} anos.`);

console.log(`${personagem.nome} tem um olho ${personagem.olhos[1]} e um olho ${personagem.olhos[0]}.`);

console.log(`O carro favorito do Stallone é o ${personagem.carros[1].marca} ${personagem.carros[1].modelo}.`);

console.log(personagem.carros[1]);