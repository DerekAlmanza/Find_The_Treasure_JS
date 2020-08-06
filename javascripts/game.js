const width = 350;
const height = 350;

let whereIsTheTarget = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

console.log(whereIsTheTarget);

let $map = document.getElementById("map");
let $distance = document.getElementById("distance");
var numberOfClicks = 0;

levelMap();

$map.addEventListener("click", function(userClick) {
    numberOfClicks ++;
    let distance = getDistance(userClick, whereIsTheTarget);
    let howCloseAmI = hintDistance(distance);
    console.log(howCloseAmI);
    $distance.innerHTML = `<h2>${howCloseAmI}<h2>`;
    
    if (distance < 30) {
        alert(`You found the treasure in ${numberOfClicks} clicks!`),
        location.reload();
    }
})