/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

/* let playerName = document.getElementById('player-name').value;
if(!playerName) playerName = 'Ramiro'; */
let playerImg = '../docs/assets/images/chieficon.png'

const player = new Player(canvas.width / 2, canvas.height / 2, 70, 50, 100, 5, 5, ctx, playerImg, 'Ramiro')
const enemies = new Enemy(2, 10, 20, 20, 50, ctx, playerImg)
const boss = new Boss(2, 10, 20, 20, 50, ctx, playerImg)
const newGame = new Game(ctx, player, enemies, boss, canvas, 5, 5);


document.getElementById('start-game-button').onclick = () => {  

    newGame.start();

}

