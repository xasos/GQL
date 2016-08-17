const prompt = require("prompt");
const colors = require("colors/safe");
prompt.message = '';
prompt.delimiter = colors.green(">");
prompt.start();

//const exec = require('child_process').exec;
//const child = exec('git log --name-status > .git-log.txt',
//(error, stdout, stderr) => {
//  console.log(`stdout: ${stdout}`);
//  console.log(`stderr: ${stderr}`);
//  if (error !== null) {
//    console.log(`exec error: ${error}`);
//  }
//});

function getPrompt() {
  console.log("called get prompt");
  prompt.get({
    properties: {
      name: {
        description: colors.green("GQL")
      }
    }
  }, function (err, result) {
    console.log(colors.cyan("You said your name is: " + result.name));
    return true;
  });
}

//process.stdout.write("user> ");
//process.stdin.setEncoding('utf8');
//process.stdin.once('data', function(val){
//
//});

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

process.stdout.write("GQL> ");
rl.on('line', function(line){
  console.log(line);
  process.stdout.write("GQL> ");
});

//rl.question('GQL> ', (answer) => {
//  // TODO: Log the answer in a database
//  console.log('Thank you for your valuable feedback:', answer);
//
//  rl.close();
//});
