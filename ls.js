const fs = require('fs');

function ls() {
  fs.readdir('./', 'utf-8', (err, files)=>{
    if(err){
      throw(err)
    }else {
      process.stdout.write(files.join('\n'))
      process.stdout.write("prompt > ")
    }
  })
}


module.exports = function (cmd) {
  if(cmd === 'ls'){
    console.log(ls())
  }

}
