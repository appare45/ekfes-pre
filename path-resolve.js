const args = process.argv.slice(2);
let targetPath = args[0];
if (args[0] === undefined) {
  targetPath = '.'
}

targetPath = targetPath.trim();
targetPath = targetPath.replace(/^\./, "./");
targetPath = targetPath.replace(/^\.\//, "/");
const path = require("path");
targetPath = path.parse(targetPath);
targetPath = path.join('.', targetPath.dir, targetPath.base);

const fs = require("fs");
if (path.extname(targetPath) == '') {
  fs.readdir(targetPath, 'utf-8', (err, files) => {
    if (err) {
      console.error(`Error: ${err.message}`)
    } else {
      files.filter(file => {
        return path.parse(file).ext === '.html'
      }).forEach(file => {
        fix(targetPath, file)
      })
    }

    files.filter(file => {
      function dirSync() {
        return new Promise(resolve => {
          fs.stat
            (path.join(targetPath, file), (statErr, stats) => {
              if (statErr) {
                console.error(`Stat error: ${statErr}`);
                resolve(false);
              }
              else {
                resolve(stats.isDirectory());
              }
            })
        })
      }
      async function result() {
        return (await dirSync())

      }
      result().then(value => { return (value) })
    })

      .forEach(dir => {
        readDir(dir)
      })
  })


}

const fix = (dir, file) => {
  const fullDir = path.join(dir, file)
  fs.readFile(fullDir, 'utf-8', (err, data) => {
    let res = data
    if (err) {
      console.error(`Error: ${err.message}`)
    } else {

      res = res.replace(/="\//gm, '="./')
      res = res.replace(/='\//gm, "='./")
      const hrefMatches = res.match(/<a.+href=["']\.\/.[^.]+["'].?>/gm)
      if (!!hrefMatches) {
        hrefMatches.forEach(match => {
          res = res.replace(match, match.replace(/href="\.\/[^"]+/gm, '$&.html'))
          res = res.replace(match, match.replace(/href='\.\/[^']+/gm, '$&.html'))
        })
      }
      const hrefMatchesIndex = res.match(/<a.+href="\.\/">/gm)
      if (!!hrefMatchesIndex) {
        hrefMatchesIndex.forEach(match => {
          res = res.replace(match, match.replace(/href=["']\.\/["']/gm, 'href="./index.html"'))
        })
      }
      fs.writeFile(fullDir, res, 'utf-8', writeErr => {
        if (writeErr) {
          console.error(`Write Error: ${writeErr}`)
        }
      })
    }
  })
  console.log(`Fixed ${fullDir}`)
} 