const fetchFirst = () => {
    const getFirstUrl = id => `https://www.fishwatch.gov/api/species${id}`

const link = "https://www.fishwatch.gov/api/species"

    fetch(link)
    .then((resp) => resp.json())
    .then(function(data){

        document.getElementById("image").src = data[2]["Image Gallery"][2].src;
        document.getElementById("campo").innerHTML = data[0]["Scientific Name"];
        console.log(data);
    });
}
/*const link = "https://www.fishwatch.gov/api/species"

fetch(link).then(response =>{
    return response.json();
}).then(corpo => {
    console.log(corpo)
    document.getElementById("span").innerHTML = corpo.toString()
})*/