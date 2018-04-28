var express = require('express');
var router = express.Router();
var multer = require("multer")

// (Using Multer to upload file) - Step 2 
// Indicate the upload path & file name
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +  file.originalname)
  }
})

var upload = multer({ storage: storage })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST home page (form) */
router.post('/', upload.single('productImage'), function(req, res, next) {
  var myData = req.body.tdsp;
  res.send("I got the post " + myData);
});

module.exports = router;
