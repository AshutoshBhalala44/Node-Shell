// Pwd file

module.exports = function(cmd) {

  if(cmd === "pwd"){
    console.log(process.cwd());
  }
}
