#!/usr/bin/env node

// Execute clear command
const execSync = require('child_process').execSync;
// import { execSync } from 'child_process';  // replace ^ if using ES modules
const output = execSync('clear', { encoding: 'utf-8' });  // the default is 'buffer'
console.log('Output was:\n', output);

// Titel
console.log("__ Timecode offset calculator __");
console.log("");

// Init
var prompt = require('prompt-sync')();

// Functions
function addLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, '0');
}

function addzero(num) {
  var x
  if (num < 10) {
    x = "0"+String(num)
    return x
  }
  else {
    return String(num)
  }
}

// Ask for user input
var timecode = prompt('Timecode: ', '00:00:00:00');
var tcArray = timecode.split(":")

var fps = Number(prompt('FPS: ', '25'));
var sec = Number(prompt('Seconds: '));
var millis = Number(prompt('Milliseconds: '));


var calculation = Math.round(((millis*10)*(fps/1000)))

// Create new timecode
var tc_h = tcArray[0]
var tc_m = tcArray[1]

var tc_s = tcArray[2]
tc_s += sec
tc_s = Number(tc_s)

var tc_ms = tcArray[3]
tc_ms += calculation
tc_ms = Number(tc_ms)

var new_tc = tc_h+":"+tc_m+":"+addzero(tc_s)+":"+addzero(tc_ms)

// console.log(calculation);
console.log("");
console.log("New timecode:");
console.log(new_tc);
console.log("");


// console.log(`Hey there ${name}`);
