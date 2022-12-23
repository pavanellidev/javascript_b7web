 function clicou() {
   const teste = document.querySelector('#teste');
   const ul = teste.querySelector('ul');

   const newList = document.createElement('ul');
   
   for (let i = 0; i < 5; i++) {
      let newLi = document.createElement("li");
      newLi.innerHTML = "Item add " + i;
      newList.append(newLi);
   }

   ul.after(newList)
 }