class Interface {
    constructor(){
        this.titleBar = this.titleBar();
        this.canvas = this.canvas();
        this.stage = new createjs.Stage(this.canvas);
        this.blueCircle = this.blueCircle();
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
        this.playButtonOn = true
        return playButton;
    }

    togglePlayButton() {
        if (this.playButtonOn) {
            $( "#playButton" ).html( "pause" )
            this.playButtonOn = false
        }else{
            $( "#playButton" ).html( "play" )
            this.playButtonOn = true
        }

        createjs.Tween.get(this.blueCircle, { loop: false })
        .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
        .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
        .to({ alpha: 0, y: 225 }, 100)
        .to({ alpha: 1, y: 200 }, 500, createjs.Ease.getPowInOut(2))
        .to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));
    }

    blueCircle(){
        var blueCircle = new createjs.Shape();
        blueCircle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
        blueCircle.x = 100;
        blueCircle.y = 100;
        this.stage.addChild(blueCircle);
        return blueCircle
    }

    initStage(){
        
        var bar = new createjs.Shape();
        bar.graphics.beginFill("teal")
        .drawRect(460, 350, 150, 20)
        this.stage.addChild(bar)
        
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
        
        this.stage.addChild(note1, note2, note3, note4, char1, char2, char3, char4)
        
        this.stage.update();
    }
            
}

export default Interface;