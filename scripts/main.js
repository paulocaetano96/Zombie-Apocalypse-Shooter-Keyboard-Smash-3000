/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

/* let playerName = document.getElementById('player-name').value;
if(!playerName) playerName = 'Ramiro'; */
let playerImg = '../docs/assets/images/chieficon.png'
let bulletImg = '../docs/assets/images/pickle_rick_bullet.png';

const player = new Player(canvas.width / 2, canvas.height / 2, 70, 50, 100, 5, 5, ctx, playerImg, 'Ramiro', canvas)
const boss = new Boss(2, 10, 20, 20, 50, ctx, playerImg)
const shot = new Shooting(player.x, player.y, player, canvas, 'asdasd', 8, ctx, lastKey)
const newGame = new Game(ctx, player, boss, canvas, 5, 5, shot);


document.getElementById('start-game-button').onclick = () => {  

    newGame.start();

    /* ADDED ------------------------------------------------------------------------------------------------------------------------*/

        /*I added a class to all buttons i wanted gone=""hide-on-click" on HTML. then i create a array-like item, called "hideOnClick" by doing the getElementsByClassName */
    const hideOnClick = document.getElementsByClassName("hide-on-click");    
    /* then i made a for loop so that we can search every single button inside of that array, going one by one, and setting it's display style to none to make them evaporate*/   
    for (let i = 0; i < hideOnClick.length; i++) {
        hideOnClick[i].style.display = "none";
    }
    /* also, i made here the display of the canvas style to be flex because i wanted it to appear once we click the button. I had to put the display originally as  none on the CSS file so that it would only show up after we click it */
    canvas.style.display = 'flex';
    /* and of course, margin 0 auto because, like you said, 0 auto will be our best friend. just came to mind that i'm writing this shite in english and we're both portuguese but i've written enough so that i don't want to go back and re-do this fucking shite notes back in our GLORIOUS mothertongue. DEUS VULT */
    canvas.style.margin = '0 auto';   
}

document.getElementById("exit-button").onclick = () => {
    window.close();
}