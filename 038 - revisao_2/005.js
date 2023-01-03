function showTime() {
   let d = new Date();
   let h = d.getHours();
   let m = d.getMinutes();
   let s = d.getSeconds();
   let txt = h + ":" + m + ":" + s + "<br>";

   document.querySelector('.demo').innerHTML += txt;
}

let timer = setInterval(showTime, 60000);