// Main bash file
const pwd = require("./pwd");
const ls = require('./ls');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
    switch(cmd){
        case "ls": ls(cmd); break;
        case "pwd": pwd(cmd); break;

        }
});



