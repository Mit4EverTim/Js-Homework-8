function ToptierAnimal()
{
const animals = ["Lion", "Rhinocerus", "Cheetah", "Dog"];
let name = animals [Math.floor(Math.random() * animals.length)];

let rating= Math.round(Math.random()*10);

let popular;
    if (rating >=9){
        popular= "S-Tier";
    }
    else if (rating >=7) {
        popular= "A-Tier";
    }
    else if (rating >=6) {
        popular= "B-Tier";
    }
    else if (rating >=5) {
        popular= "C-Tier";
    }
    else if (rating <=5) {
        popular= "F-Tier";
    }

let hour= new Date().getHours();
let greeting;
if (hour <=12){
    greeting= "Good Morning";
    }
    else if (hour <=17){
        greeting="Good Afternoon";
    }
    else if (hour <=19){
        greeting="Good Evening";
    }
    else{
        greeting="Good Night";
    }

let ability;
if (name === "Lion"){
    ability = "Explosive power";
    }
    else if (name === "Rhinocerus"){
    ability = "Extraordinary suite";
    }
    else if (name === "Cheetah"){
    ability = "Extraordinary speed";
    }
    else if (name === "Dog"){
    ability = "Superhuman sense of smell";
    }

let type = "Terrestrial animals";

document.getElementById("animal").innerHTML = name;
document.getElementById("rating").innerHTML = rating;
document.getElementById("popular").innerHTML = popular;
document.getElementById("greeting").innerHTML = greeting;
document.getElementById("ability").innerHTML = ability;
document.getElementById("type").innerHTML = type;

}