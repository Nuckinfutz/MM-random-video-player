'use strict';
const NodeHelper = require('node_helper');

var videoplaying = false

module.exports = NodeHelper.create({
  
  play_video: function () {
    var exec = require('child_process').exec;

    exec('./modules/' + this.name + '/play-video.py',
    function (error, stdout, stderr) {
        console.log("Command output below");
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
        videoplaying = false
    });
  },
  
  // Subclass socketNotificationReceived received.
  socketNotificationReceived: function(notification, payload) {
    if(notification === 'TRIGGER_VIDEO') {
      if(!videoplaying) {
        videoplaying = true;
        this.play_video();
       };
    };
  }
});