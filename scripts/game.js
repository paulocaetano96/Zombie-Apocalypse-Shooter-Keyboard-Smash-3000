/** @type {HTMLCanvasElement} */
class Game {
    constructor(ctx, width, player, enemies, boss, canvas){

        this.ctx = ctx;
        this.width = width;
        this.player = player;
        this.canvas = canvas;
        this.intervalId = null;
        this.fps = 0;
        this.enemies = enemies;
        this.boss = boss;
        this.highScores = [];

    }

    start(){

    }

    update = () => {

    }

    stop(){

    }

    clear() {

    }

    checkGameOver(){

    }
}



