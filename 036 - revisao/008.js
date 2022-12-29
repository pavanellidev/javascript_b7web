let html = "";

for(let i = 1; i <= 1000; i++) {
   if (i <= 1){
      html += `Eu já falei ${i} vez que... </br>`
   } else {
      html += `Eu já falei ${i} vezes que ... </br>`
   }
   
}

document.getElementById("demo").innerHTML = html