var express = require('express');
var router = express.Router();

var mysql = require('mysql')
var pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:"123456",
	database:'dna'
})

/* GET home page. */

router.post('/insert', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*')
		var title=req.body.title
		var name=req.body.name
		var detail=req.body.detail
		var id=req.body.id
		console.log(req.body)
			
		pool.query("INSERT INTO user (uid,title,name,detail) VALUES ("+id+",'"+title+"','"+name+"','"+detail+"')",function(e,rows,fields){
			
			res.send(rows)
			console.log(rows)
			}) 

	
});

router.post('/list', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*')
		
	var b=req.body.uid
	console.log(b)
		pool.query("SELECT * FROM user WHERE uid="+b,function(e,rows,fields){
			
				res.send(rows)
			console.log(rows)
		
		
		
		
	}) 
		
});

router.post('/detail', function(req, res, next) {
//  	res.header('Access-Control-Allow-Origin','*')
	
	var id=req.body.id
	console.log(req.body)
	console.log(id)

	pool.query('SELECT * FROM user WHERE id='+id,function(e,rows){
		res.header('Access-Control-Allow-Origin','*')
	
		res.send(rows)
		console.log(rows)
	})
});

module.exports = router;
