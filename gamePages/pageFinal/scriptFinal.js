function getPoints(){
    var  points =  window.location.toString().split("?ptn=").pop();
 
    return points;
 }
 
 var ptn = getPoints();
 

 if (ptn > 7) {
    document.getElementById("message").innerHTML = "Parabéns! Você finalizou o jogo";
 }else if (ptn > 4) {
    document.getElementById("message").innerHTML = "Parabéns! Jogue mais um pouco par conseguir uma pontuação melhor";
 }else {
    document.getElementById("message").innerHTML = "Jogue novamente e consiga uma pontuação maior";
 }

 document.getElementById("points").innerHTML = "Pontuação: " + ptn;