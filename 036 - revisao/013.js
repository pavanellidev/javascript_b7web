function subirTela() {
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
   });
}

function showButton() {
   if(window.scrollY <= 250) {
      document.querySelector('.scrollbutton').style.display = 'none';
   } else {
      document.querySelector('.scrollbutton').style.display = 'block';
   }
}

// setInterval(showButton, 2000);

window.addEventListener('scroll', showButton); 