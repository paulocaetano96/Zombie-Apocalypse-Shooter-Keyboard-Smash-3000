/** @type {HTMLCanvasElement} */

class Game {
    constructor(ctx, player, boss, canvas, playerSpeed, enemySpeed){

        this.ctx = ctx;
        this.player = player;
        this.canvas = canvas;
        this.intervalId = null;
        this.frames = 0;
        this.enemies = [];
        this.boss = boss;
        this.highScores = [];
        this.playerSpeed = playerSpeed;
        this.enemySpeed = enemySpeed;
       

    }

    start(){

        this.intervalId = setInterval(this.update, 1000 / 60);

    }

    update = () => {

        //Function responsbile for updating the game
        this.frames++;                                 //frames passed, used for time and score
        this.clear();                                
        this.player.newPos();
        this.player.draw();
        this.updateEnemies();                         
        for(let i = 0; i < this.enemies.length; i++){ //for loop to update all enemies position in the array
            this.enemies[i].newPos();
        }
        /* this.shot.draw();
        */
        

    }

    stop(){

        clearInterval(this.intervalId);

    }

    clear() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    }
    
    updateEnemies(){

        for(let i = 0; i < this.enemies.length; i++){
            this.enemies[i].draw();

        }

        if(this.frames % 240 === 0){                                
                  
            
            let randomX = Math.floor(Math.random() * this.canvas.width); 
            let randomY = Math.floor(Math.random() * this.canvas.height) ; 
            let randomArray = [{x : 0, y : randomY}, {x :this.canvas.width, y: randomY},
                {x: randomX,y:0},{x:randomX, y:this.canvas.height}];  
            let randomIndex = Math.floor(Math.random() * randomArray.length);
           

            this.enemies.push(new Enemy(randomArray[randomIndex].x, randomArray[randomIndex].y, 30, 30, 50, this.ctx, '../docs/assets/images/chieficon.png'));
        }
    }

    checkGameOver(){

    }
}



