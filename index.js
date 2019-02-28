
const fs = require('fs');
const path = require('path');

let filename = 'index.html';
let src = path.join(__dirname, filename);
let destDir = path.join(__dirname, '../amp');

fs.access(destDir, (err) => {
  if(err)
    fs.mkdirSync(destDir);

  copyFile(src, path.join(destDir, filename));
});


function copyFile(src, dest) {

  let readStream = fs.createReadStream(src);

  readStream.once('error', (err) => {
    console.log(err);
  });

  readStream.once('end', () => {
    console.log('  _______   ______     ______     _______  __       _______         '+'\n'+
    ' /  _____| /  __  |   /  __  |   /  _____||  |     |   ____|        '+'\n'+
    '|  |  __  |  |  |  | |  |  |  | |  |  __  |  |     |  |__    ______ '+'\n'+
    '|  | |_ | |  |  |  | |  |  |  | |  | |_ | |  |     |   __|  |______|'+'\n'+
    '|  |__| | |   --   | |   --   | |  |__| | |   ----.|  |____         '+'\n'+
    ' .______|  .______/   .______/   .______| |_______||_______|        '+'\n'+
    '                                                  '+'\n'+                
    '     ___      .___  ___. .______           '+'\n'+
    '    /   |     |   V    | |   _  |          '+'\n'+
    '   /  ^  |    |  |  /  | |  |_)  |  ______ '+'\n'+
    '  /  /_|  |   |  | V|  | |   ___/  |______|'+'\n'+
    ' /  _____  |  |  |  |  | |  |              '+'\n'+
    '/__/     |__| |__|  |__| | _|              '+'\n'+
    '                                                                                    '+'\n'+
    '.___________. _______ .___  ___. .______    __          ___   .___________. _______ '+'\n'+
    '|           ||   ____||   V    | |   _  |  |  |        /   |  |           ||   ____|'+'\n'+
    '`---|  |----`|  |__   |  |  /  | |  |_)  | |  |       /  ^  | `---|  |----`|  |__   '+'\n'+
    '    |  |     |   __|  |  | V|  | |   ___/  |  |      /  /_|  |    |  |     |   __|  '+'\n'+
    '    |  |     |  |____ |  |  |  | |  |      |  `----./  _____  |   |  |     |  |____ '+'\n'+
    '    |__|     |_______||__|  |__| | _|      |_______/__/     |__|  |__|     |_______|'+'\n'+
    '|  '+'\n'+
    '||'+'\n'+
    '||| Google-AMP-Template '+'\n'+
    '||| Beta-Mary - version 0.1'+'\n'+
    '||| '+'\n'+
    '||| Help this open-source project: '+'\n'+
    '||| GitHub: https://github.com/tborges/npm-packages/tree/master/google-amp-template'+'\n'+
    '|| '+'\n'+
    '| '+'\n'

    );
  });

  readStream.pipe(fs.createWriteStream(dest));
}