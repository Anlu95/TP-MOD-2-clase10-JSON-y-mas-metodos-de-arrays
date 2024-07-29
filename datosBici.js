let fs = require('fs');

let leerJSON = () => {
  let biciJSON = fs.readFileSync('./bicicletas.json', 'utf-8')
  let biciJS = JSON.parse(biciJSON)  
 return biciJS
}

module.exports = {
    leerJSON
}