function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    msg.innerHTML = 'Modificando Java Script'
    img.src = 'img/fotoflores.jpg'
}
function myFuction(){
    document.getElementById("demo").innerHTML = "Olá Mundo"
}
let text = ""
let i = 0;

do {
  text += "<br>The number is " + i;
  alert(i)
  i++;
}
while (i < 10);  

document.getElementById("demo").innerHTML = text;