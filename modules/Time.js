var os = require('os');

function getTime() {
  var uptime = os.uptime();
  var inMin = Math.floor(uptime / 60).toFixed(0);

  var inHours = Math.floor(uptime / 3600).toFixed(0);
  
  var secInhours = (uptime % 3600).toFixed(0);
  var secInMin = (secInhours / 60).toFixed(1);
  
  var minInHour = Math.floor(secInMin);
  var secInhour = (secInhours % 60);

  if (uptime < 3600) {
    console.log(inMin + ' min. ' + (uptime % 60) + ' sec.');
  } else {
    console.log(inHours + ' h ' + minInHour + ' min ' + secInhour + ' sec.');
  }
};

exports.getTime = getTime;