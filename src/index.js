import _ from 'lodash';
import './style.css';
// import createjs from "createjs";
import $ from 'jquery';
import ShallWeDanceAudio from './audio/sfx/shall_we_AJ.m4a';
import Interface from './interface.js'

function setupButton(appInterface) {
  var shallWeDance = new Audio(ShallWeDanceAudio);

  $('#playButton').click((e) => {
    shallWeDance.play();
    appInterface.togglePlayButton();
  });
}

var appInterface = new Interface();
document.body.appendChild(appInterface.titleBar)
document.body.appendChild(appInterface.canvas)
appInterface.initStage()
var stage = appInterface.stage
document.body.appendChild(appInterface.playButton)
setupButton(appInterface);

createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener("tick", stage);
