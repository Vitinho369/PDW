const link = "https://www.fishwatch.gov/api/species"

    fetch(link)
    .then((resp) => resp.json())
    .then(function(data){
        var fase = 3;
        var fishs = [];
        var fishCorrect;
        var fishesOption = document.getElementById("list_image");
        var imageOption = document.getElementById("optionChallenge");
        var figure = document.createElement("div");
        var options = [];

        for(var i=0; i < 3; i++){
            options.push({image: document.createElement("img"), button: document.createElement("button")});
            options[i].image.id = "image" + i;
            options[i].button.id = "button" + i;
        }
            
        if(fase == 1){
            fishs.push(data[10]["Species Illustration Photo"].src);
            fishs.push(data[11]["Species Illustration Photo"].src);  
            fishs.push(data[32]["Species Illustration Photo"].src);  
        
            fishCorrect = {image: data[32]["Species Illustration Photo"].src, nameScientific: data[32]["Scientific Name"]};

        }else if(fase ==2){
            fishs.push(data[3]["Species Illustration Photo"].src);
            fishs.push(data[38]["Species Illustration Photo"].src);  
            fishs.push(data[70]["Species Illustration Photo"].src);  
        
            fishCorrect = {image: data[3]["Species Illustration Photo"].src, nameScientific: data[3]["Scientific Name"]};

        }else if(fase ==3){
            fishs.push(data[67]["Species Illustration Photo"].src);
            fishs.push(data[68]["Species Illustration Photo"].src);  
            fishs.push(data[71]["Species Illustration Photo"].src);  
        
            fishCorrect = {image: data[68]["Species Illustration Photo"].src, nameScientific: data[68]["Scientific Name"]};
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

