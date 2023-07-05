const express = require('express');
const router = express.Router();
const fs = require("fs")
/* GET home page. */
function saveRequestToFile(req, res) {
  // Create a new file with the current date and time as the filename.
  const filename = new Date().toISOString() + ".txt";

  // Write the request data to the file.
  const data = JSON.stringify(req.body);
  fs.writeFileSync(`requests/${filename}`, data);

  // Send a response to the client.
  res.send({"TRY": "HACK ME ;)"})
}

router.get('/', saveRequestToFile);

//function for save all requesto for this route in a txt file?
module.exports = router;
