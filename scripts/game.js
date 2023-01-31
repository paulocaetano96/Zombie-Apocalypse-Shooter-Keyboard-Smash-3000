/** @type {HTMLCanvasElement} */

class Game {
    constructor(ctx, player, canvas, playerSpeed, enemySpeed, shot){

        this.ctx = ctx;
        this.player = player;
        this.canvas = canvas;
        this.intervalId = null;
        this.frames = 0;
        this.enemies = [];
        this.highScores = [];
        this.playerSpeed = playerSpeed;
        this.enemySpeed = enemySpeed;
        this.shot = shot;
       

    }

    start(){

        this.intervalId = setInterval(this.update, 1000 / 60);

    }

    update = () => {

        //Function responsbile for updating the game
        this.frames++;                                 //frames passed, used for time and score
        this.clear();         
        this.checkGameOver();                       
        this.player.newPos();
        this.player.draw();
        this.updateEnemies();   

        for(let i = 0; i < this.enemies.length; i++){ //for loop to update all enemies position in the array
            this.enemies[i].newPos();         
            } 
              
        this.shot.shotEnd();

    }

    stop(){
     
        clearInterval(this.intervalId);     

    }

    clear() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    }
    
    updateEnemies = () =>{

        for(let i = 0; i < this.enemies.length; i++){
            this.enemies[i].draw();                                                     //fazer aparecer os enemies
            if(this.enemies[i].gotShot()){                                              //verificar se foram atingidos
                this.enemies[i].receiveDamage();                                       //causar dano nos enemies
            }  
            if(this.enemies[i].enemyType == 'Boss' && this.enemies[i].hp <= 0){        //caso o Boss morra,acabar o jogo
                alert('CA GANDA PATRÃO')
                this.stop()
                
            }else if(this.enemies[i].enemyType == 'Enemy' && this.enemies[i].hp <= 0){  //caso seja um enemy a morrer, retirar do array
                this.enemies.splice(i, 1)
            }
            
            
        }

        //criação de X e Y random
        //colocar posições random na border do canvas
        //decidir aleatoriamente de que border apareça o enemy    
        let randomX = Math.floor(Math.random() * this.canvas.width); 
        let randomY = Math.floor(Math.random() * this.canvas.height) ; 
        let randomArray = [{x : 0, y : randomY}, {x :this.canvas.width, y: randomY},{x: randomX,y:0},{x:randomX, y:this.canvas.height}];  
        let randomIndex = Math.floor(Math.random() * randomArray.length);

        if(this.frames % 300 === 0){               //criação de enemies após x tempo                              
                  
            this.enemies.push(new Enemy(randomArray[randomIndex].x, randomArray[randomIndex].y, 30, 30, 10, this.ctx, '../docs/assets/images/chieficon.png',this.shot, 'Enemy'));
        }

         if (this.frames % 730 === 0) {             //criação do boss após x tempo

            this.enemies.push(new Boss(randomArray[randomIndex].x, randomArray[randomIndex].y, 100, 100, 80, this.ctx, '../docs/assets/images/bossImage.png', this.shot, 'Boss'));
         }

               

    }

    checkGameOver(){
        const crashed = this.enemies.some((enemy) =>{    //.some vai verificar o array dos enemies, correr a função crashWith com todos os enemies
            return this.player.crashWith(enemy);
        });
        if(crashed){                                     //se for detedada colisão player perder vida
            this.player.hp -= 1;           
        } 

        if(this.player.hp <= 0) {                        //se a vida for menor ou igual a zero, perde o jogo
            alert('AI CA BURRO!!!!');
            this.stop();
        }
    }

   
}