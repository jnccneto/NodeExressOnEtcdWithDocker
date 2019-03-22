var express = require('express')
var app = express()
var host;

var server = app.listen(8000, function () {
  console.log('app listening on port 8000!')
   host = server.address().address;
   console.log('running at http://' + host )
   console.log(server.address());
   console.log(host);

})

app.get("/ping", (req, res) => {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	res.json({"message": "ping from " + host });
});

var registry = require('etcd-registry');
var services = registry('etcd-2:2379,etcd-1:2379');

var CheckRegister = setInterval(function(){
	console.log('setInterval services.lookup check: ');
		services.lookup('ping', function(err, service) {
		if(service == undefined) {
			console.log("service not registered");
			console.log(service);
			services.join('ping', {name: 'pingservice',port:8000,url:"http://"+host+"ping" },function(err, service) {
			console.log('services.join: ');		
				});
			}
			else {
						console.log("service registered");
						console.log(service);
						clearInterval(CheckRegister);
				}
		});
	
	}, 1500)


app.get("/list", (req, res) => {
	services.list('', function(err, service) {
	console.log('services.list:');
	console.log(service);
	res.json(service);
	});
});



