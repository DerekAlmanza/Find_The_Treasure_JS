let getRandomNumber = limit => {
    return Math.floor(Math.random() * limit);
}

let getDistance = (userClick, target) => {
    let diffx = userClick.offsetX - target.x;
    let diffy = userClick.offsetY - target.y;
    return Math.sqrt(Math.pow(diffx, 2) + Math.pow(diffy, 2));
}

let hintDistance = distance => 
    distance < 20 ? "You find the treasure!"
    : distance < 30 ? "Boiling Hot" 
    : distance < 40 ? " Really Hot"
    : distance < 60 ? "Hot"
    : distance < 100 ? "Warm"
    : distance < 150 ? "Cold"
    : distance < 200 ? "Really Cold"
    : "Freezing";

//let levelMap = {
//    switch (key) {
//        case value:
//            
//            break;
//    
//        default:
//            break;
//    }
//}

