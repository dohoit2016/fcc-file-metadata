var express = require('express');
var router = express.Router();


router.post('/file', function(req, res, next) {
	console.log(req.file);
	res.json(req.file);
});

module.exports = router;
