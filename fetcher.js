const request = require('request');
const fs = require('fs');
const URL = process.argv[2];
const filePath = process.argv[3];

request(URL, (error, response, body) => {
  console.log(response);
  if (error || response.statusCode !== 200) {
    console.log('Something when wrong, please try again');
  }
  if (!filePath) {
    console.log('this file is does not exist.');
  } else {
    fs.writeFile(filePath, body, () => {
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    });
  }
});