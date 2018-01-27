var os = require('os');
var Time = require('./Time');
var colors = require('colors');

function getOSinfo() {
  var type = os.type();
  if(type === 'Darwin') {
    type = 'OSX';
  } else if (type === 'Windows_NT') {
    type = 'Windows';
  }

  var release = os.release();
  var cpu = os.cpus()[0].model;
  var uptime = os.uptime();
  var userInfo = os.userInfo();

  console.log('System: '.grey, type);
  console.log('Release: '.red, release);
  console.log('CPU model: '.blue, cpu);
  console.log('User name: '.yellow, userInfo.username);
  console.log(colors.inverse('Home dir: '), userInfo.homedir);
  console.log('UpTime: '.green);
  Time.getTime();
};


exports.print = getOSinfo;