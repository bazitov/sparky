var exec = require('child_process').exec;
var child;

function Sparky(config) {

	if (!config.deviceId) {
		console.log('Device id not found.')
	}

	if (!config.token) {
		console.log('Spark token not found.')
	}

	this.config = config
}

Sparky.prototype = {
	_command: function(command) {
		var command = 'curl https://api.spark.io/v1/devices/' + this.config.deviceId + '/' + command + '   -d access_token=' + this.config.token + ' -d params=' + pin + ',' + value;

		child = exec(command,
			function (error, stdout, stderr) {
			//console.log('stdout: ' + stdout);
			//console.log('stderr: ' + stderr);
			if (error !== null) {
			  console.log('exec error: ' + error);
			}
		});
	},
	digitalWrite: function(pin, value) {
		this._command('digitalWrite', pin, value);
	},
	analogWrite: function(pin, value) {
		this._command('analogWrite', pin, value);
	}
}

exports.Sparky = Sparky
