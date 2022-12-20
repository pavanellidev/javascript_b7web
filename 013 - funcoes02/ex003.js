let usuario = prompt("Nome de usuário:");
let senha = prompt("Senha:");

function validar(usuario, senha) {
   if (usuario == "Pedro" && senha == 123) {
      return true
   } else {
      return false
   }     
}

let validacao = validar(usuario, senha);

if (validacao) {
   alert("Acesso concedido");
} else {
   alert ("Acesso negado");
}