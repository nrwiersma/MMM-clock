# MMM-clock

This is a clock module based on the default `clock` module. All credit to the original author.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: "clock",
		position: "top_left",
		config: {
			// See 'Configuration options' for more information.
		}
	}
]
````

## Configuration options

The following properties can be configured:

| Option            | Description
| ----------------- | -----------
| `timeFormat`      | Use 12 or 24 hour format. <br><br> **Possible values:** `12` or `24` <br> **Default value:** uses value of _config.timeFormat_
| `dateFormat`      | Configure the date format as you like. <br><br> **Possible values:** [Docs](http://momentjs.com/docs/#/displaying/format/) <br> **Default value:** `"dddd, MMMM d"`
| `timezone`        | Specific a timezone to show clock. <br><br> **Possible examples values:** `America/New_York`, `America/Santiago`, `Etc/GMT+10` <br> **Default value:** `none`. See more informations about configuration value [here](https://momentjs.com/timezone/docs/#/data-formats/packed-format/)
