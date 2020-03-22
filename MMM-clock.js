/* global Log, Module, moment, config */
/* Magic Mirror
 * Module: MMM-clock
 */
Module.register("MMM-clock",{
	// Module config defaults.
	defaults: {
		timeFormat: config.timeFormat,
		dateFormat: "dddd, MMMM D",
		timezone: null,
	},
	// Define required scripts.
	getScripts: function() {
		return ["moment.js", "moment-timezone.js"];
	},
	// Define styles.
	getStyles: function() {
		return ["MMM-clock.css"];
	},
	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

		// Schedule update interval.
		var self = this;
		setInterval(function() {
			self.updateDom();
		}, 30000);

		// Set locale.
		moment.locale(config.language);

	},
	// Override dom generator.
	getDom: function() {
		var timeWrapper = document.createElement("div");
		var dateWrapper = document.createElement("div");
		// Style Wrappers
		timeWrapper.className = "time bright light";
		dateWrapper.className = "date medium light";

		var timeString;
		var now = moment();
		if (this.config.timezone) {
			now.tz(this.config.timezone);
		}

		var hourSymbol = "HH";
		if (this.config.timeFormat !== 24) {
			hourSymbol = "h";
		}
		timeString = now.format(hourSymbol + ":mm");

		dateWrapper.innerHTML = now.format(this.config.dateFormat);
		timeWrapper.innerHTML = timeString;

		var wrapper = document.createElement("div");
		wrapper.appendChild(timeWrapper);
		wrapper.appendChild(dateWrapper);
		return wrapper;
	}
});
