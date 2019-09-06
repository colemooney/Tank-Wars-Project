var canvas = document.getElementById("game")
var ctx = canvas.getContext('2d');


var im = new Image()
im.src = './images/TW_logo_final.png'

im.onload = function(){
    console.log(ctx)
    ctx.drawImage(im, 0, 150, canvas.width, 300)
}

// background
function drawBg() {
    ctx.fillStyle = "green"
    ctx.fillRect(0, 0, 600, 600)
    ctx.fill()
    ctx.fillStyle = "grey"
    ctx.fillRect(0, 500, 600, 100)
    ctx.fill()
}

/**TANKS STUFF* */
var img = new Image();

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
class Enemy {
    constructor(x, y, src, speed) {
        this.y = y
        this.x = x
        this.src = src
        this.speed = speed 
    }
    moveDown() {
        this.y = (this.y + 1)*this.speed;
        this.x += ((Math.random() - 0.5) * 2);
        enemyImage.src = this.src
        ctx.drawImage(enemyImage, this.x, this.y, 50, 50);
    }

}
let enemies = []

function spawn(src, speed) {
    let invader = new Enemy(Math.random() * canvas.width, 0,  src, speed)
    enemies.push(invader)
}
/*** ENEMY */

/***BULLETS */
class Bullet {
    constructor(x, y) {
        this.x = x
        this.y = y

    }
    moveUp() {
        this.y -= 2
        ctx.fillStyle = "yellow"
        ctx.fillRect(this.x, this.y, 5, 10)
    }

}

let shots = []

function shoot() {
    let shot = new Bullet(tank.x + 50, tank.y)
    shots.push(shot)
}
/***** */

/**BOUND BOX */
function bound() {
    for (let g = 0; g < enemies.length; g++) {
        if (enemies[g].x > 530) {
            enemies.splice(g, 1)
            ////console.log(enemies[g])
            continue;
        }
    }
}

let gO = 0;

function endGame() {
    for (let g = 0; g < enemies.length; g++) {
        if (enemies[g].y > 450) {
            enemies.splice(g, 1)
            gO++
            console.log(gO)
        } else;

        if (gO > 2) {
            //console.log("OVER")
            ctx.fillStyle = "grey"
            ctx.fillRect(200, 200, 200, 200)
            ctx.fillStyle = "white"
            ctx.font = "20px Arial"
            ctx.fillText("GAME OVER", 240, 300)
            ctx.fillText("Your score is " + Math.round(score/100), 240, 340)
            throw "Game over!"

        } else if (gO > 1) {

            ctx.font = "15px Arial"
            ctx.fillStyle = "red"
            ctx.fillText("1 life", 10, 20)

        } else if (gO > 0) {
            ctx.font = "15px Arial"
            ctx.fillStyle = "red"
            ctx.fillText("2 lives", 10, 20)

        }
    }
}

/** */

/*** collision */
function collision() {
    for (let i = 0; i < enemies.length; i++) {
        for (let h = 0; h < shots.length; h++) {
            if (!shots[h] || !enemies[i]) {
                break;
            }
            if (shots[h].x < enemies[i].x + 50 && shots[h].x > enemies[i].x && shots[h].y > enemies[i].y && shots[h].y < enemies[i].y + 50) {
                enemies.splice(i, 1)
                shots.splice(h, 1)
            }
        }
    }
}
/*** */
let score = 0;
function counter(){
    score++
    ctx.font="15px Arial"
    ctx.fillStyle="red"
    ctx.fillText(`score: ${Math.round(score/100)}`, 100, 20)
    
}

/** */
//**HEARBEAT --ENGINE */
let fmp = 0

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clears all
    drawBg()
    ctx.drawImage(img, tank.x, tank.y, 100, 100);

    enemies.forEach(invader => {
        invader.moveDown()
        
    })

    shots.forEach(shot => {
        shot.moveUp()

    })
    bound()
    collision()
    counter()

    fmp++

    if (fmp % 150 === 0) {
        spawn("./images/enemy.png", 1)
    }
    if (fmp % 500 === 0) {
        spawn("./images/newenemy.png", 1 + .01)
    }
    endGame()
    window.requestAnimationFrame(animate)
}

// key binds
document.onkeydown = function (e) {

    switch (e.keyCode) {
        case 37:
            tank.moveLeft();
            //console.log('left', tank);
            break;
        case 39:
            tank.moveRight();
            //console.log('right', tank);
            break;
        case 38:
            shoot();
            //console.log('shoot');

            break;
    }
}

// logo/startgame/difficulty
function drawLogo() {
    var canvas = document.getElementById("logo")
    var ctx = canvas.getContext('2d');
    var logo = new Image()
    logo.src = "./images/TW_new_logo.png"
    logo.onload = function(){
    ctx.drawImage(logo, 25, 200, 300, 200)
    }
}
drawLogo()
document.getElementById("logo").onclick = function () {
    animate()
}