/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "imperial",

	modules: [
		{
			module: "clock",
			position: "top_left",
			config: {
				showWeek: true,
				secondsColor: "#FF0000",
			}
		},
		{
	    module: 'MMM-NFL',
	    position: 'top_left',
	    config: {
	        colored: true,


	    }
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
				]
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Fairfax, US",
				locationID: "4758023",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "eb8485bf1469ae50ca054b245d4d2b75"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Fairfax, US",
				locationID: "4758023",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "eb8485bf1469ae50ca054b245d4d2b75"
			}
		},
		{
			module: 'calendar_monthly',
			position: 'left',
			config: {
					// The config property is optional
					// Without a config, a default month view is shown
					// Please see the 'Configuration Options' section for more information
				}
		},
		{
    module: "MMM-DarkSkyRadar",
    position: "top_right",
    header: "Radar",
    config: {
        lat: "38.842676",   // Latitude
        lon: "-77.277895",  // Longitude
        height: "600px",  //optional default
        width: "350px",   //optional default
        zoomLevel: 18,     //optional default (the larger the more zoomed in)
        updateInterval: 15 * 60 * 1000,  //optional default (15 minutes)
    }
  },



	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
