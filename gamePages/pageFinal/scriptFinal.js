function getPoints(){
    var  points =  window.location.toString().split("?ptn=").pop();
 
    return points;
 }
 
 var ptn = getPoints();
 
 if (ptn > 7) {
    document.getElementById("message").innerHTML = "Parabéns! Você finalizou o jogo";
 }else if (ptn > 4) {
    document.getElementById("message").innerHTML = "Você está quase lá! Tente novamente";
 }else {
    document.getElementById("message").innerHTML = "Não desista! Ninguém disse que seria fácil";
 }

 document.getElementById("points").innerHTML = "Pontuação: " + ptn;