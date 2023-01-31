import * as fs from 'fs';
import { execSync } from 'child_process';
import * as path from 'path';

// example file and directory to copy
//const sourceDirectory = ["./", "./style"];
const sourceDirectory = ['./'];
const destinationDirectory = 'dist/';

if (fs.existsSync("./dist")) {
  fs.rmSync(destinationDirectory, { recursive: true });
}

if (!fs.existsSync("./dist")) {
  fs.mkdirSync("./dist");
}

sourceDirectory.forEach((dir) => {
  cpyFile(dir, destinationDirectory);
});

function cpyFile(directory, destination) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.forEach((file) => {
      if (path.extname(file) === '.html' || path.extname(file) === '.css') {
        const sourceFile = path.join(directory, file);
        let destinationFile = path.join(destination, directory);
        fs.mkdir(destinationFile, { recursive: true }, (err) => {
          if (err) throw err;
        });
        destinationFile = path.join(destinationFile, file);
        const readStream = fs.createReadStream(sourceFile);
        const writeStream = fs.createWriteStream(destinationFile);
        readStream.pipe(writeStream);
      }
    });
  });
}

//compile Ts file
execSync('npx tsc');
