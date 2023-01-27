/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let playerName = document.getElementById('player-name').value;
if(!playerName) playerName = 'Ramiro';

const player = new Player(canvas.width / 2, canvas.height / 2, canvas.width, canvas.height, 100, 1, 1, ctx, img, 'Ramiro')

window.onload = () => {
document.getElementById('start-button').onclick = () => {

    const newGame = new Game(ctx, player, enemies, boss, canvas);
    newGame.start();
    
}

}