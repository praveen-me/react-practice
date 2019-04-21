const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

// Use fileuploader as middleware
app.use(fileUpload());

// Upload File route
app.post('/upload', (req, res) => {
  if(req.files === null) {
    return res.status(400).json({
      msg: "No file upload",
    })
  }

  const { file } = req.files;
  
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) return res.status(500).send(err);

    res.json({
      fileName: file.name, filePath: `/uploads/${file.name}`
    });
  });

});

app.listen(4001, () => {
  console.log("Server started at PORT:4001");
})