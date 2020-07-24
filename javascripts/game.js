const width = 300;
const height = 300;

let whereIsTheTarget = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

console.log(whereIsTheTarget);

let $map = document.getElementById("map");
let $distance = document.getElementById("distance");
var numberOfClicks = 0;

$map.addEventListener("click", function(userClick) {
    numberOfClicks ++;
    let distance = getDistance(userClick, whereIsTheTarget);
    let howCloseAmI = hintDistance(distance);
    console.log(howCloseAmI);
    $distance.innerHTML = `<h1>${howCloseAmI}<h1>`;
    
    if (distance < 20) {
        alert(`You find the treasure in ${numberOfClicks} clicks!`),
        location.reload();
    };
})