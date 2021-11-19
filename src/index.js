import _ from 'lodash';
import './style.css';
import createjs from "createjs";

// how to import image :
// import ImageFile from './images/image.png'

function gameCanvas() {

  var canv = document.createElement('canvas');
  canv.id = 'gameCanvas';
  canv.width = '650';
  canv.height = '400';

  return canv
}

function titleBar() {
  const titleBar = document.createElement('div');

  titleBar.innerHTML = 'Funky Dancer 2';
  titleBar.classList.add('title');

  // how to append image :
  // const imageThing = new Image();
  // imageThing.src = ImageFile;
  // element.appendChild(imageThing);

  return titleBar;
}

function setStage() {

  const gameCanvas = document.getElementById('gameCanvas');
  console.log(gameCanvas)
  var stage = new createjs.Stage(gameCanvas);
  console.log(stage)

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
}


document.body.appendChild(titleBar());
document.body.appendChild(gameCanvas());
setStage();
