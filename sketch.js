var allPlayers
var canvas,backgroundImg, gameState = 0, playerCount
var database, form, player, game
var car1, car2, car3, car4, cars


function setup(){
canvas = createCanvas(displayWidth - 20, displayHeight - 30)
database = firebase.database()
game = new Game()
game.getState()
game.start()
}

function draw(){
    background('white')
if(playerCount === 4){
    game.update(1)
}
if(gameState === 1){
    game.play()
}
}
