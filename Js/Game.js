class Game {
    constructor(){

    }
    
    getState(){
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value",(data)=>{
            gameState=data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if (gameState===0){
            player=new Player();
             
             var playerCountRef= await database.ref('PlayerCount').once("value");

             if (playerCountRef.exists()) {
                 playerCount=playerCountRef.val();
                 player.getCount();
             }

             form= new Form();
             form.display();
        }   
    }

    play(){
            form.hide();
            Player.getPlayerInfo();
            
            if (allPlayers!=undefined) {
                background("Brown")
                image(TrackI,0,-DisplayHeight*4,DisplayWidth,DisplayHeight*5);
            }
    }

}