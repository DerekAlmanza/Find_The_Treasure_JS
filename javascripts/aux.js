let getDistance = (userClick, target) => {
    let diffx = userClick.offsetX - target.x;
    let diffy = userClick.offsetY - target.y;
    return Math.sqrt(Math.pow(diffx, 2) + Math.pow(diffy, 2));
}

let hintDistance = distance => 
    distance < 30 ? "You find the treasure!"
    : distance < 40 ? "Boiling Hot" 
    : distance < 60 ? " Really Hot"
    : distance < 100 ? "Hot"
    : distance < 180 ? "Warm"
    : distance < 180 ? "Cold"
    : distance < 300 ? "Really Cold"
    : "Freezing";

let $$map = document.getElementById("map");

function levelMap() {
    let level = getRandomNumber(5);
    console.log(level);
    switch (level) {
        case 1:
            $$map.innerHTML = `<img src = images/treasuremap1.jpg width="350px" height="350px">`
            break;
        case 2:
            $$map.innerHTML = `<img src = images/treasuremap2.jpg width="350px" height="350px">`
            break;
        case 3:
            $$map.innerHTML = `<img src = images/treasuremap3.jpg width="350px" height="350px">`
            break;
        case 4:
            $$map.innerHTML = `<img src = images/treasuremap4.jpg width="350px" height="350px">`
            break;
        case 5:
            $$map.innerHTML = `<img src = images/treasuremap5.jpg width="350px" height="350px">`
            break;
        default:
            $$map.innerHTML = `<img src = images/treasuremap0.png width="350px" height="350px">`
            break;
    }
}
