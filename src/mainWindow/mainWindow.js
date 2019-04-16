const exec = require('child_process').exec;

function execute(command, callback){
    exec(command, (error, stdout, stderr) => {
        callback(stdout)
    })
}
  
document.querySelector('#dlBut').addEventListener('click', () => {
        execute('which docker', (output) => {
            console.log(output)
    })
})