import _ from 'lodash';
import './style.css';
// import createjs from "createjs";
import $ from 'jquery';
import ShallWeDanceAudio from './audio/sfx/shall_we_AJ.m4a';
import Interface from './interface.js'

function setupButton() {
  var shallWeDance = new Audio(ShallWeDanceAudio);

  $('#playButton').click((e) => {
    console.log('click')
    shallWeDance.play();
  });
}



var appInterface = new Interface();
document.body.appendChild(appInterface.titleBar)
document.body.appendChild(appInterface.canvas)
appInterface.initStage()
var playButton = appInterface.playButton
document.body.appendChild(playButton)
setupButton();
