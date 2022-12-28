let carros = ['Palio', 'Gol', 'Celta', 'Ka', 'Sandero']

console.log(carros[3])

let carro = {
   marca: 'Fiat',
   modelo: 'Uno',
   peso: '800kg',
   ligado: false,
   ligar:function() {
      this.ligado = true;
      console.log("Vrum Vrum")
   },
   acelerar:function(){
      if(this.ligado === true){
         console.log("Riririririhrihr")
      }
   }
}

console.log(carro.peso)

// carro.ligar()
carro.acelerar()