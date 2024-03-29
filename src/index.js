// this is a wrapper for the actual game
// when calling the initGame function,
// the actual game, game engine, textures etc. are lazy-loaded

export async function initGame(itemScale, speed) {
    let {initGame} = await import("./game.js"); // lazy load actual game here
    initGame(itemScale, speed);
}

if(document.getElementById("gameContent") === null) { // should be for testing purposes only!
    console.log('Did not find gameContent-div, so added one');
    let element = document.createElement("div");
    element.id = "gameContent";
    element.style.position = "absolut";
    element.style.x = "0";
    element.style.y = "0";
    element.style.width = "70%";
    element.style.height = "500px";
    document.body.appendChild(element);
}
initGame(2.5, 0.4); // TODO: this should be called when the game is about to be played