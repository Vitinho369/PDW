const link = "https://www.fishwatch.gov/api/species";

    fetch(link)
    .then((resp) => resp.json())
    .then(function(data){

        var fase = parseInt(window.location.toString().split("fase=").pop());
        var ptn = window.location.toString().split("ptn=").pop();
        var fishs = [];
        var fishCorrect;
        var fishesOption = document.getElementById("list_image");
        var imageOption = document.getElementById("optionChallenge");
        var figure = document.createElement("div");
        var options = [];

        function navigatePage(){
            window.location.href = '/gamePages/fishPage.html?fase=' + fase + "&ptn=" + ptn; 
        }

        function rigthFish(){
            ptn++;
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
            setTimeout(function(){navigatePage()}, 2500);
        }
        
        function wrongFish(){
            fase++;
            document.getElementById("list_image").remove(options[0].image.id);
            document.getElementById("optionChallenge").remove(options[0].button.id);
            var divErro = document.createElement("div");
            var erro = document.createElement("lottie-player");
            erro.src = "https://assets9.lottiefiles.com/packages/lf20_pqpmxbxp.json";
            erro.background="transparent";
            erro.speed = "0.7";
            erro.loop = "loop";
            erro.autoplay = "autoplay";
            divErro.style = "height: 600px;";
            divErro.append(erro);
            document.body.append(divErro); 
            setTimeout(function(){navigatePage()}, 2500);
        }

        for(var i=0; i < 3; i++){
            options.push({image: document.createElement("img"), button: document.createElement("button")});
            options[i].image.id = "image" + i;
            options[i].button.id = "button" + i;

            if(i !=2) 
                options[i].button.onclick  =  wrongFish;
            else 
                options[i].button.onclick = rigthFish;
        }
            
        if(fase == 1){
            fishs.push(data[10]["Species Illustration Photo"].src);
            fishs.push(data[11]["Species Illustration Photo"].src);  
            fishs.push(data[32]["Species Illustration Photo"].src);  
        
            fishCorrect = {image: data[32]["Species Illustration Photo"].src, nameScientific: data[32]["Scientific Name"]};

        }else if(fase == 2){
            fishs.push(data[3]["Species Illustration Photo"].src);
            fishs.push(data[70]["Species Illustration Photo"].src);  
            fishs.push(data[38]["Species Illustration Photo"].src);  
        
            fishCorrect = {image: data[70]["Species Illustration Photo"].src, nameScientific: data[70]["Scientific Name"]};

        }else if(fase == 3){
            fishs.push(data[67]["Species Illustration Photo"].src);
            fishs.push(data[68]["Species Illustration Photo"].src);  
            fishs.push(data[71]["Species Illustration Photo"].src);  
        
            fishCorrect = {image: data[71]["Species Illustration Photo"].src, nameScientific: data[71]["Scientific Name"]};
        
        }else if(fase == 4){
            fishs.push(data[67]["Species Illustration Photo"].src);
            fishs.push(data[68]["Species Illustration Photo"].src);  
            fishs.push(data[71]["Species Illustration Photo"].src);  
        
            fishCorrect = {image: data[71]["Species Illustration Photo"].src, nameScientific: data[71]["Scientific Name"]};

        }

            for(var i=0; i < 3; i++){
                options[i]["image"].src = fishs[i];
                options[i]["button"].append(options[i]["image"]);
                figure.append(options[i]["button"]);
            }

            fishCorrect = document.createElement("img");
            fishCorrect.id = "fishCorrect";
            fishCorrect.src = fishs[2];

            imageOption.append(fishCorrect);
            fishesOption.append(figure);
            
    });