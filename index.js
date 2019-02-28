
const fs = require('fs');
const path = require('path');

let filename = 'index.html';
let src = path.join(__dirname, filename);
let destDir = path.join(__dirname, 'amp');

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
    console.log(''+'\n'+
'+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+'+'\n'+
'|G O O G L E - A M P - T E M P L A T E|'+'\n'+
'+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+'+'\n'+
    '|  '+'\n'+
    '||'+'\n'+
    '||| Google-AMP-Template '+'\n'+
    '||| Beta-Mary - version 0.1'+'\n'+
    '||| '+'\n'+
    '||| Help this open-source project: '+'\n'+
    '||| GitHub: https://github.com/tborges/google-amp-template'+'\n'+
    '|| '+'\n'+
    '| '+'\n'

    );
  });

  readStream.pipe(fs.createWriteStream(dest));
}