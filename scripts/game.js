/** @type {HTMLCanvasElement} */
class Game {
    constructor(ctx, player, enemies, boss, canvas, playerSpeed, enemySpeed){

        this.ctx = ctx;
        this.player = player;
        this.canvas = canvas;
        this.intervalId = null;
        this.fps = 0;
        this.enemies = enemies;
        this.boss = boss;
        this.highScores = [];
        this.playerSpeed = playerSpeed;
        this.enemySpeed = enemySpeed;

    }

    start(){

        this.intervalId = setInterval(this.update, 1000 / 60);

    }

    update = () => {

        this.clear();
        this.player.newPos();
        this.player.draw();
       
        

    }

    stop(){

        clearInterval(this.intervalId);

    }

    clear() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    }

    checkGameOver(){

    }
}



