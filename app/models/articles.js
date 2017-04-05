var mongoose = require('mongoose'); 

module.exports = mongoose.model('Article', {
	article: {type: String, default: ''}, 
	article_type: {type: String, default: ''}, 
	article_link: {type: String, default: ''}, 
	article_thumbnail: {type: String, default: ''}, 
	clicks: {type: Number, default: '' }, 
	rating: {type: Number, default: ''}, 
	article_largethumbnail: {String, default: ''}
});