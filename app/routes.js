var Article = require('./models/articles'); 

function getArticles(res){
	Article.find(function(err, articles){
		if (err)
			res.send(err) 

		res.json(articles);
	});
}; 

module.exports = function(app){



	app.get('/api/articles', function(req,res){
		//using mongoose to get all the articles in the database
		//res.send("hi");
		getArticles(res); 
	}); 

 
	app.post('/api/articles', function(req,res){
		Article.create({
			article: req.body.article,
			article_type: req.body.article_type, 
			article_link: req.body.article_link, 
			article_thumbnail: req.body.article_thumbnail, 
			clicks: req.body.clicks, 
			rating: req.body.rating, 
			article_largethumbnail: req.body.article_largethumbnail
		}, function(err, article){
			if (err) {res.send(err);}

			getArticles(res); 
		}); 
	});



	app.delete('/api/articles/:article_id', function(req, res){
		Article.remove({
			_id: req.params.article_id
		}, function(err, article){
			if (err) {res.send(err); }
			getArticles(res); 
		});
	}); 

	app.get('*', function(req,res){
		res.sendfile('./public/index.html');
	}); 

	app.get('/api/articles/article_link', function(req, res){
		res.sendfile('./public/pages/4YEO.html');
	})



}; 
