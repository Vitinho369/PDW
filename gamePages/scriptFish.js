const link = "https://www.fishwatch.gov/api/species";

    fetch(link)
    .then((resp) => resp.json())
    .then(function(data){

        var fase = parseInt(window.location.toString().split("fase=").pop());
        var ptn = window.location.toString().split("ptn=").pop();
        var fishs = [];
        var fishCorrectImage;
        var fishesOption = document.getElementById("list_image");
        var imageOption = document.getElementById("optionChallenge");
        var figure = document.createElement("div");
        var options = [];

        function navigatePage(final){
            if(final == true){
                var url = window.location.pathname.split('fishPage.html');
                
                window.location.href = url[0]  + "/pageFinal/finalPage.html?ptn=" + ptn;
            }else{
                var url = window.location.pathname.split('fishPage.html');
                
                window.location.href = url[0]  + "fishPage.html?fase=" + fase + "&ptn=" + ptn;
            }
            
        }

        function rigthFish(){
            fase++;
            document.getElementById("list_image").remove(options[0].image.id);
            document.getElementById("optionChallenge").remove(options[0].button.id);
            var divAcert = document.createElement("div");
            var acert = document.createElement("lottie-player");
            acert.src = "https://assets10.lottiefiles.com/packages/lf20_lrlahijx.json";
            acert.background="transparent";
            acert.speed = "0.7";
            acert.loop = "loop";
            acert.autoplay = "autoplay";
            divAcert.style = "height: 600px;";
            divAcert.append(acert);
            document.body.append(divAcert); 
            
            if(fase == 11){
                setTimeout(function(){navigatePage(true)}, 2500);
            }else {
                ptn++;
                 setTimeout(function(){navigatePage(false)}, 2500);
            }
        }
        
        function wrongFish(){
            
            fase++;
            document.getElementById("list_image").remove(options[0].image.id);
            document.getElementById("optionChallenge").remove(options[0].button.id);
            var divErro = document.createElement("div");
            var erro = document.createElement("lottie-player");
            erro.src = "https://assets6.lottiefiles.com/private_files/lf30_8wacjhqf.json";
            erro.background="transparent";
            erro.speed = "0.7";
            erro.loop = "loop";
            erro.autoplay = "autoplay";
            divErro.style = "height: 450px; position: relative; top:60px;";
            divErro.append(erro);
            document.body.append(divErro); 
            
            if(fase == 11){
                setTimeout(function(){navigatePage(true)}, 2100);
            }else {
                 setTimeout(function(){navigatePage(false)}, 2100);
            }
        }

        for(var i=0; i < 3; i++){
            options.push({image: document.createElement("img"), button: document.createElement("button")});
            options[i].image.id = "image" + i;
            options[i].button.id = "button" + i;
        }
            
        if(fase == 1){
            fishs.push(data[10]["Species Illustration Photo"].src);
            fishs.push(data[11]["Species Illustration Photo"].src);  
            fishs.push(data[32]["Species Illustration Photo"].src);  

            options[0].button.onclick  =  wrongFish;
            options[1].button.onclick  =  wrongFish;
            options[2].button.onclick = rigthFish;
        
            fishCorrectImage = {image: data[32]["Species Illustration Photo"].src, nameScientific: data[32]["Scientific Name"]};

        }else if(fase == 2){
            fishs.push(data[3]["Species Illustration Photo"].src);
            fishs.push(data[38]["Species Illustration Photo"].src);  
            fishs.push(data[70]["Species Illustration Photo"].src);

            options[0].button.onclick  =  wrongFish;
            options[2].button.onclick  =  wrongFish;
            options[1].button.onclick = rigthFish;
        
            fishCorrectImage = {image: data[38]["Species Illustration Photo"].src, nameScientific: data[38]["Scientific Name"]};

        }else if(fase == 3){
            fishs.push(data[71]["Species Illustration Photo"].src);
            fishs.push(data[68]["Species Illustration Photo"].src);  
            fishs.push(data[65]["Species Illustration Photo"].src);  

            options[0].button.onclick  =  rigthFish;
            options[1].button.onclick  =  wrongFish;
            options[2].button.onclick = wrongFish;
        
            fishCorrectImage = {image: data[71]["Species Illustration Photo"].src, nameScientific: data[71]["Scientific Name"]};
        
        }else if(fase == 4){
            fishs.push(data[46]["Species Illustration Photo"].src);
            fishs.push(data[47]["Species Illustration Photo"].src);  
            fishs.push(data[66]["Species Illustration Photo"].src);
            
            options[0].button.onclick  =  wrongFish;
            options[1].button.onclick  =  rigthFish;
            options[2].button.onclick = wrongFish;
        
            fishCorrectImage = {image: data[47]["Species Illustration Photo"].src, nameScientific: data[47]["Scientific Name"]};

        }else if(fase == 5){
            fishs.push(data[48]["Species Illustration Photo"].src);
            fishs.push(data[109]["Species Illustration Photo"].src);  
            fishs.push(data[49]["Species Illustration Photo"].src);
            
            options[0].button.onclick  =  wrongFish;
            options[1].button.onclick  =  wrongFish;
            options[2].button.onclick = rigthFish;
        
            fishCorrectImage = {image: data[49]["Species Illustration Photo"].src, nameScientific: data[49]["Scientific Name"]};

        }else if(fase == 6){
            fishs.push(data[30]["Species Illustration Photo"].src);
            fishs.push(data[31]["Species Illustration Photo"].src);  
            fishs.push(data[33]["Species Illustration Photo"].src);
            
            options[0].button.onclick  =  wrongFish;
            options[1].button.onclick  =  rigthFish;
            options[2].button.onclick = wrongFish;
        
            fishCorrectImage = {image: data[31]["Species Illustration Photo"].src, nameScientific: data[31]["Scientific Name"]};

        }else if(fase == 7){
            fishs.push(data[13]["Species Illustration Photo"].src);
            fishs.push(data[97]["Species Illustration Photo"].src);  
            fishs.push(data[44]["Species Illustration Photo"].src);
            
            options[0].button.onclick  =  wrongFish;
            options[1].button.onclick  =  wrongFish;
            options[2].button.onclick = rigthFish;
        
            fishCorrectImage = {image: data[44]["Species Illustration Photo"].src, nameScientific: data[44]["Scientific Name"]};

        }else if(fase == 8){
            fishs.push(data[58]["Species Illustration Photo"].src);
            fishs.push(data[26]["Species Illustration Photo"].src);  
            fishs.push(data[48]["Species Illustration Photo"].src);
            
            options[0].button.onclick  = rigthFish;
            options[1].button.onclick  =  wrongFish;
            options[2].button.onclick = wrongFish;
        
            fishCorrectImage = {image: data[58]["Species Illustration Photo"].src, nameScientific: data[58]["Scientific Name"]};
        }else if(fase == 9){
            fishs.push(data[72]["Species Illustration Photo"].src);
            fishs.push(data[103]["Species Illustration Photo"].src);  
            fishs.push(data[108]["Species Illustration Photo"].src);
            
            options[0].button.onclick = wrongFish;
            options[1].button.onclick  =  wrongFish;
            options[2].button.onclick  = rigthFish;
            fishCorrectImage = {image: data[108]["Species Illustration Photo"].src, nameScientific: data[108]["Scientific Name"]};
        }else if(fase == 10){
            fishs.push(data[96]["Species Illustration Photo"].src);
            fishs.push(data[57]["Species Illustration Photo"].src);  
            fishs.push(data[115]["Species Illustration Photo"].src);
            
            options[0].button.onclick = wrongFish;
            options[1].button.onclick  =  rigthFish;
            options[2].button.onclick  = wrongFish;
            fishCorrectImage = {image: data[57]["Species Illustration Photo"].src, nameScientific: data[57]["Scientific Name"]};
        }
            
            for(var i=0; i < 3; i++){
                options[i]["image"].src = fishs[i];
                options[i]["button"].append(options[i]["image"]);
                figure.append(options[i]["button"]);
            }

            fishCorrect = document.createElement("img");
            fishCorrect.id = "fishCorrect";
            fishCorrect.src = fishCorrectImage.image;

            imageOption.append(fishCorrect);
            fishesOption.append(figure);
            
    });