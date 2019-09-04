function drawLogo(){
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

function drawBack(){
    var canvas = document.getElementById("game")
var ctx = canvas.getContext('2d');
    ctx.fillStyle = "green"
    ctx.fillRect(0, 0, 600, 600)
    ctx.fill()
    ctx.fillStyle = "grey"
    ctx.fillRect(0, 500 , 600, 100)
    ctx.fill()
}
var tank = {
    x: 300,
    y: 500,
     moveLeft:  function() { this.x -= 25 },
     moveRight: function() { this.x += 25 },
  }
  
  function drawEnemy(enemy){

  function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    var canvas = document.getElementById('game');
     var ctx = canvas.getContext('2d');
  
     enemy = new Image();
     
     

    var xE = getRandomInt(550)
    
    var yE = 50 
    
    enemy.onload = function() {
          
        ctx.drawImage(enemy, xE, yE , 50, 50);
      
       
        drawEnemy()
         ctx.clearRect(enemy, xE, yE, 50, 50)
      }
    
    enemy.src = './images/enemy.png';
  }
//   var moveEnemy = {
//     let xM;
//     let yM;
    
//   }
  
  function drawTank(tank){
  
  
    var canvas = document.getElementById('game');
     var ctx = canvas.getContext('2d');
  
    var img = new Image();
    // imgScale = 1/2;
  
    img.onload = function() {
          ctx.drawImage(img, tank.x, tank.y,100,100);
      console.log(tank)
      console.log(img)
     
      };
  
    img.src = './images/tank.png';
  }
  
//   function enemies(){
//     var canvas = document.getElementById('game');
//     var ctx = canvas.getContext('2d');
//     var xE = getRandomInt(600)
//     var yE = getRandomInt(400)
//     var enemy = new Image();
//     enemy.onload = function(){
//         ctx.drawEnemies(img, xE, yE, 100, 100)
//     }
//     enemy.src = "./images/enemy.png"
//   }
//   function shoot(){
//     // for(let i = 49; i > 1 ; i * 10){
//     let x =+ tank.x
//     let y = 490 
    
//     var canvas = document.getElementById('game');
//      var ctx = canvas.getContext('2d');
     
//     ctx.fillStyle = "black"
//     ctx.fillRect(x, y , 5, 10)
//     ctx.fillStyle = "yellow"
//     ctx.fillRect(x, y, 5, 10)
    
//     if (y > 0){
//         timer = setTimeout("shoot()", 1);
//         updateCanvas(tank)
        
//     } else{
//         ctx.fillStyle = "black";
//         ctx.fillRect(x, y, 5, 10);
//         y = 490;
//         ctx.fillRect(x + 23, y, 5, 10)
//         updateCanvas(tank)
//     }
    
//      }




    document.onkeydown = function(e) {
      
      switch (e.keyCode) {
        case 37: tank.moveLeft();
          console.log('left',  tank); 
            break;
        case 39: tank.moveRight(); 
        console.log('right', tank); 
            break;
        case 38: shoot(); 
        console.log('shoot', tank); 
            break;
      }
      
    }
  
// function updateEnemy() {
//     console.log("woor")
//     var canvas = document.getElementById('game');
//      var ctx = canvas.getContext('2d');
//      ctx.clearRect(0,0,1500,1700);
//     drawBack() 
//     spawn()
    
//   }
  
  
  function updateCanvas(tank) {
    var canvas = document.getElementById('game');
     var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,1500,1700);
    drawBack() 
    drawEnemy()
    drawTank(tank)
   } 
 
  

document.getElementById("logo").onclick = function startGame(){
    console.log("starting game");
    document.getElementById('game');
    updateCanvas(tank)
 
}   
