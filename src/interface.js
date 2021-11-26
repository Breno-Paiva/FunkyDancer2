class Interface {
    constructor(){
        this.titleBar = this.titleBar();
        this.canvas = this.canvas();
        this.playButton = this.playButton();
    }
    
    titleBar(){
        const titleBar = document.createElement('div');
        titleBar.innerHTML = 'Funky Dancer 2';
        titleBar.classList.add('title');
        return titleBar;
    }
    
    canvas() {
        var canvas = document.createElement('canvas');
        canvas.id = 'gameCanvas';
        canvas.width = '650';
        canvas.height = '400';
        return canvas
    }

    playButton() {
        var playButton = document.createElement('button');
        playButton.innerHTML = 'play';
        playButton.id = 'playButton';
        return playButton;
    }


    initStage(){
        var stage = new createjs.Stage(this.canvas);
        createjs.Ticker.setFPS(55);
        
        var bar = new createjs.Shape();
        bar.graphics.beginFill("teal")
        .drawRect(460, 350, 150, 20)
        stage.addChild(bar)
        
        var note1 = new createjs.Shape();
        note1.graphics.beginFill("#9cdaff")
        .drawEllipse(450, 350, 25, 20)
        var char1 = new createjs.Text("J", "18px Arial", "#9cdaff")
        char1.x = 456;
        char1.y = 375;
        var note2 = new createjs.Shape();
        note2.graphics.beginFill("#c568a5")
        .drawEllipse(500, 350, 25, 20)
        var char2 = new createjs.Text("K", "18px Arial", "#c568a5")
        char2.x = 505;
        char2.y = 375;
        var note3 = new createjs.Shape();
        note3.graphics.beginFill("#ffd265")
        .drawEllipse(550, 350, 25, 20)
        var char3 = new createjs.Text("L", "18px Arial", "#ffd265")
        char3.x = 557;
        char3.y = 375;
        var note4 = new createjs.Shape();
        note4.graphics.beginFill("#bcff7c")
        .drawEllipse(600, 350, 25, 20)
        var char4 = new createjs.Text(";", "18px Arial", "#bcff7c")
        char4.x = 609;
        char4.y = 373 ;
        
        stage.addChild(note1, note2, note3, note4, char1, char2, char3, char4)
        
        stage.update();
        

        // ** research the new Ticker alternative
        // createjs.Ticker.setFPS(55);
        // createjs.Ticker.addEventListener("tick", handleTick);
        
        // function handleTick(event){
            //   noteThing.scroll(1);
            //   stage.update(event)
            // }
    }
            
}

export default Interface;