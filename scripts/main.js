/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

/* let playerName = document.getElementById('player-name').value;
if(!playerName) playerName = 'Ramiro'; */
let playerImg = '../docs/assets/images/chieficon.png'
let bulletImg = '../docs/assets/images/pickle_rick_bullet.png';

const player = new Player(canvas.width / 2, canvas.height / 2, 70, 50, 100, 5, 5, ctx, playerImg, 'Ramiro', canvas)
const shot   = new Shooting(player.x, player.y, player, canvas, bulletImg, 8, ctx, lastKeyPressed)
const shot2  = new Shooting(player.x, player.y, player, canvas, bulletImg, 8, ctx, lastKeyPressed)
const shot3  = new Shooting(player.x, player.y, player, canvas, bulletImg, 8, ctx, lastKeyPressed)
const shot4  = new Shooting(player.x, player.y, player, canvas, bulletImg, 8, ctx, lastKeyPressed)
const shot5  = new Shooting(player.x, player.y, player, canvas, bulletImg, 8, ctx, lastKeyPressed)
const shot6  = new Shooting(player.x, player.y, player, canvas, bulletImg, 8, ctx, lastKeyPressed)
const magazine = [shot, shot2, shot3, shot4, shot5, shot6];
const reload = new Reload(magazine, 2000, 5);
//const boss = new Boss(120, 120, 100, 100, 200, ctx, '../docs/assets/images/bossImage.png', shot, 'Boss')
const newGame = new Game(ctx, player, canvas, 5, 5, shot, magazine);


document.getElementById("start-game-button").onclick = () => {
    let hideOnClick = document.getElementsByClassName("hide-on-click");
    for (let i = 0; i < hideOnClick.length; i++) {
        hideOnClick[i].style.display = "none";
    }
  document.getElementById('myForm').classList.remove("hidden")
/*     myForm.style.display = 'flex';
    myForm.style.margin = '0 auto'; */
}

document.getElementById('begin-game').onclick = () => {  

    newGame.start();
    document.getElementById('myForm').classList.add("hidden")

    let hideOnClick = document.getElementsByClassName("hide-on-click");    
    for (let i = 0; i < hideOnClick.length; i++) {
        hideOnClick[i].style.display = "none";
    }
    canvas.style.display = 'flex';
    canvas.style.margin = '0 auto'; 
    document.getElementById('myAudio').play();
}

document.getElementById("exit-button").onclick = () => {
    window.close();
}

document.getElementById("highscore-button").onclick = () => {
    location.href = "./highscore.html"
}

