class Form {
  constructor() {
    this.input = createInput("Name")
    this.button = createButton("PLay")
    this.greeting = createElement("h2")
  }
  hide(){
    this.greeting.hide()
    this.button.hide()
    this.input.hide()
  }


 display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    
    
    
    this.input.position.mousePressed(130, 160);
    this.button.position.mousePressed(250, 200);

    button.mousePressed(function(){
      this.input.hide();
      this.button.hide();

      player.name = this.input.value()
      playerCount+= 1
      player.updateCount(playerCount)
      
      
     // playerCount+=1;
      //player.update(name)
      //player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name )
      this.greeting.position(130, 160)
    });

  }
}
