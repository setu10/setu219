var express = require('express');
var router = express.Router();
var nodemailer= require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'alauddin.setu@gmail.com',
			pass: '10800219?'
		}
	});
	var mailOption ={
		from: 'John Doe <johndoe@outlook.com>',
		to: 'alauddin.setu@gmail.com',
		subject: 'website simulation',
		text: 'You have a new submission with the following detail.. Name: '+req.body.name+ 'Email: '+req.body.email+ 'message: '+req.body.message,
		html: '<p>You got a new submission with the following details.</p><ul><li>Name: '+req.body.name +'</li><li>Email: '+req.body.email +'</li><li>message: '+req.body.message +'</li></ul>'
	};
	transporter.sendMail(mailOption, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		}else{
			console.log('Message Sent: '+info.response);
			res.redirect('/');
		}

	})
});

module.exports = router;
