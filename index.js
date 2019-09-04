
var canvas = document.getElementById("game")
var ctx = canvas.getContext('2d');


function drawBg(){
    ctx.fillStyle = "green"
    ctx.fillRect(0, 0, 600, 600)
    ctx.fill()
    ctx.fillStyle = "grey"
    ctx.fillRect(0, 500, 600, 100)
    ctx.fill()
}



/**TANKS STUFF* */
var img = new Image();
img.onload = function () {
    ctx.drawImage(img, tank.x, tank.y, 100, 100);

};
img.src = './images/tank.png';
var tank = {
    x: 300,
    y: 500,
    moveLeft: function () {
        this.x -= 25
    },
    moveRight: function () {
        this.x += 25
    },
}
/**** */




/**ENEMY STUFF */
let enemyImage = new Image();
enemyImage.src = './images/enemy.png';

class Enemy {
    constructor(x,y){
        this.y = y
        this.x = x
    }
    moveDown(){
        this.y = this.y+1;
        this.x = this.x+.2; 
        ctx.drawImage(enemyImage, this.x, this.y, 50, 50);    
    }
    draw(){
    }
    
} 

let enemies = [] 
for (let k = 1; k< 5; k++){
    if (k>0){
function spawn(){
    let invader = new Enemy(Math.random()*canvas.width, 0)
    enemies.push(invader)
}
    }else;
}
/*** ENEMY */



/***BULLETS */
class Bullet {
    constructor(x,y){
        this.x = x
        this.y = y
        
    }
    moveUp(){
        this.y -= 2
        ctx.fillStyle ="yellow"
        ctx.fillRect(this.x, this.y, 5, 10)
    }
    
}

let shots = []
function shoot(){
    let shot = new Bullet(tank.x + 50, tank.y)
    shots.push(shot)
}
/***** */



//**HEARBEAT --ENGINE */
function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height); //clears all
    drawBg()
    ctx.drawImage(img, tank.x, tank.y, 100, 100);
    
    shots.forEach(shot=>{
        shot.moveUp()
    })
     enemies.forEach(enemy=>{
        invader.moveDown()
     })
    window.requestAnimationFrame(animate)
}animate()




function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));

}





document.onkeydown = function (e) {

    switch (e.keyCode) {
        case 37:
            tank.moveLeft();
            console.log('left', tank);
            break;
        case 39:
            tank.moveRight();
            console.log('right', tank);
            break;
        case 38:
            shoot();
            console.log('shoot');
            break;
    }


}












































function drawLogo() {
    var canvas = document.getElementById("logo")
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "purple"
    ctx.ellipse(150, 300, 100, 150, Math.PI / 2, 0, 2 * Math.PI)
    ctx.fill()
    ctx.fillStyle = "white"
    ctx.font = "50px Arial"
    ctx.fillText("Cole Wars", 35, 315);

    ctx.fillStyle = "black"
    ctx.font = "20px Arial"
    ctx.fillText("Press Me", 100, 350);
}
drawLogo()
