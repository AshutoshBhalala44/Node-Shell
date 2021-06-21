const fs = require('fs');
function cat(file){
  const contents = fs.readFile(file, (err, data)=> {
    if(err){
      throw(err)
    } else {
      process.stdout.write(data)
    }
  })
  console.log(contents)

}



module.exports = function(cmd){

  console.log(cat(cmd));

}
