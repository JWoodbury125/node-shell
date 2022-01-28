
module.exports = function () {

    process.stdin.on('data', (data) => {

    const cmd = data.toString().trim();
    if (cmd === 'pwd'){
        let cwd = process.cwd();
        console.log(cwd.trim())

        process.stdout.write('\nprompt > ');
    }

});
  };

