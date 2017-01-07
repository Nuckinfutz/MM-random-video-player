/* global Log, Module, moment */

/* Magic Mirror
 * Module: Bryan Show Video
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * Bryan: Test video module
 */

Module.register("showvideo",{

	// Module config defaults.
	defaults: {
	},

	// Define required scripts.
	getScripts: function() {
		return [];
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);
	},

	// Override dom generator.
	getDom: function() {
		//console.log("Get dom called");
		//var wrapper = document.createElement("div");
	},

	randomNumber: function(min, max) {
    	return Math.random() * (max - min) + min;
	},

	notificationReceived: function(notification, payload, sender) {
		console.log("Notification received by video: ", notification, ' ', payload, ' ', sender);
		if (payload === 'dad') {
			this.sendSocketNotification("TRIGGER_VIDEO", {});
		}
	},
});
