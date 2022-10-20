/*const fetchFirst = () => {
    const getFirstUrl = id => `https://www.fishwatch.gov/api/species${id}`

const link = "https://www.fishwatch.gov/api/species"

    fetch(link)
    .then((resp) => resp.json())
    .then(function(data){

        document.getElementById("image").src = data[2]["Image Gallery"][2].src;
        document.getElementById("campo").innerHTML = data[0]["Scientific Name"];
        console.log(data);
    });
}*/
/*const link = "https://www.fishwatch.gov/api/species"

fetch(link).then(response =>{
    return response.json();
}).then(corpo => {
    console.log(corpo)
    document.getElementById("span").innerHTML = corpo.toString()
})*/


/*const link = "https://www.fishwatch.gov/api/species"

    fetch(link)
    .then((resp) => resp.json())
    .then(function(data){
        var listImage = document.getElementById("list_image");
        var images;
        var figure;
        var legend;

        for(i in data){
            images = document.createElement("img");
            figure = document.createElement("figure");
            legend = document.createElement("figcaption");

            images.src = data[i]["Species Illustration Photo"].src;
            legend.innerHTML = data[i]["Scientific Name"] + " " +i;

            figure.append(images);
            figure.append(legend)
            listImage.append(figure);
        }
       
        console.log(data);
    });*/


    function navigatePage() {
        //var url = window.location.pathname.split('index.html')
        //var namePage = url.pop();
        //url += '/gamePages/fishPage.html';
        //window.location.href =   url ;
        window.location.href =   '/gamePages/fishPage.html?fase=1&ptn=0';
}