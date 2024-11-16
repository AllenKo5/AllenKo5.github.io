"use strict";
var cleanInput = document.querySelector('#clean-input');
var cleanOutput = document.querySelector('#clean-output');
var clean = document.querySelector('#clean');
var convertInput = document.querySelector('#convert-input');
var convertOutput = document.querySelector('#convert-output');
var convert = document.querySelector('#convert');
function cleanDeck() {
    var output = '';
    var lines = (cleanInput === null || cleanInput === void 0 ? void 0 : cleanInput.value.split('\n')) || [];
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].indexOf('+') > -1) {
            output += "".concat(lines[i].substring(0, lines[i].indexOf('+')), "\n");
        }
        else if (lines[i].indexOf('|') > -1) {
            output += "".concat(lines[i].substring(0, lines[i].indexOf('|')), "\n");
        }
    }
    if (cleanOutput) {
        cleanOutput.value = output;
    }
}
;
function convertDeck() {
    var output = '"main": [\n';
    var lines = (convertInput === null || convertInput === void 0 ? void 0 : convertInput.value.split('\n')) || [];
    var i = 0;
    while (lines[i] !== '') {
        output += "\"".concat(lines[i], "\",\n");
        i++;
    }
    output = "".concat(output.substring(0, output.length - 2), "\n],\n\"sideboard\": [\n");
    i += 2;
    while (i < lines.length) {
        output += "\"".concat(lines[i], "\",\n");
        i++;
    }
    output = "".concat(output.substring(0, output.length - 2), "\n]");
    console.log(output);
    if (convertOutput) {
        convertOutput.innerHTML = output;
    }
}
;
if (clean) {
    clean.addEventListener('click', cleanDeck);
}
if (convert) {
    convert.addEventListener('click', convertDeck);
}
