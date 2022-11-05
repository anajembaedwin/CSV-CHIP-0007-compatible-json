const crypto = require('crypto');
const fs = require('fs');
// require csvtojson module
const CSVToJSON = require('csvtojson');




(async () => {
    try {
      // convert namingAllTeams.csv file to JSON array
      const Teams = await CSVToJSON().fromFile('namingAllTeams.csv')
  
      // log the JSON array
      console.log(Teams)

      // calculate the sha256 hash
      const hashNode = val =>
        new Promise(resolve =>
            setTimeout(
              () => resolve(crypto.createHash('sha256').update(val).digest('hex')),
              0
            )
        );

      hashNode(JSON.stringify(Teams)).then(
        console.log
      );

      // Write JSON array to a file
      fs.writeFile('namingAllTeams.json', JSON.stringify(Teams, null, 4), err => {
       if (err) {
         throw err
       }
       console.log('JSON array is saved.')
       })
    
       //catch error and log it
    } catch (err) {
      console.log(err)
    }
})()



