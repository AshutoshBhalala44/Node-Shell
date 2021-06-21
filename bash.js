// Main bash file
const pwd = require("./pwd");
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmdLine = data.toString().trim().split(' ');
    const cmd = cmdLine[0];
    const args = cmdLine[1];


    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
    switch(cmd){
        case "ls": ls(cmd); break;
        case "pwd": pwd(cmd); break;
        case "cat": cat(args); break;

        }


});



