class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton('play');
        this.greeting=createElement('h2');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        this.input=createInput("name");
        this.button=createButton('enter');
        this.greeting=createElement('h3');
        this.input.position(650,100);
        this.button.position(770,150);
        this.button.mousePressed(function(){
            this.input.hide();
            this.button.hide();
            dog.name=this.input.value();
            dog.update(name);
            this.greeting.html("feed "+dog.name);
            this.greeting.position(130,160);
        })
    }
}