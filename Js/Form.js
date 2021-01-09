class Form{
    constructor(){
        this.input= createInput("");
        this.greeting= createElement('h2');
        this.title= createElement('h1');
        this.button= createButton('Play');
        this.reset= createButton('Reset');
    }
    hide(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
        this.title.hide();
    }
    display(){
        this.title.html("Car Racing");
        this.title.position(displayWidth/2-50,30);

        this.input.position(displayWidth/2-40,displayHeight/2);
        this.button.position(displayWidth/2,displayHeight/2+50);
        this.reset.position(displayWidth-70,20);
        
        this.button.mousePressed(()=>{
          this.buttton.hide();
          this.input.hide();
          player.name=this.input.value();
          playerCount+=1;
          playerIndex=playerCount;
          player.update();
          player.updateCount(playerCount);
        })
    }
}