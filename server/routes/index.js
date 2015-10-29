var express = require('express');
var router = express.Router();
var fs = require('fs');
var request=require("request");
var cheerio=require("cheerio");

router.get('/hell', function(req, res, next) {
  //ajax request
  var newUrl = 'https://news.ycombinator.com/';
  var newsHtml = request(newUrl, function (error, response, html){
    //parse html
    var $ = cheerio.load(html);
    var newsTitle = $('td.title a').first().text();

    //is javascript in the title
    var newsHasJavascript = newsTitle.match('javascript');
    // console.log('line 24', hasJavascript);

    if (!newsHasJavascript) {
      //request python.org, return something fun
      var pythonUrl = 'https://python.org';
      var pythonHtml = request(pythonUrl, function(err, response, html){

        var $ = cheerio.load(html);
        var pythonLogo = $('img').attr('src');
        res.send('<img src="https://python.org/'+pythonLogo+'">');


      });

    } else {
      //request reddit, parsre, test if javascript is part of the title
      //if yes
        //request mdn, return something fun
      //if no
        //request puthon.org, return something fun

      //ajax request
      var redditUrl = 'https://www.reddit.com/r/Web_Development/';
      var redditHtml = request(redditUrl, function(err, response, html){
        //parse html
        var $ = cheerio.load(html);
        var redditTitle = $('a.title').first().text();

        //is javascript in the title
        var redditHasJavascript = redditTitle.match('javascript');
        // console.log('right here', redditHasJavascript);
      });
    }
  });
});

router.get('/hellway', function(req, res, next){
  request('https://www.reddit.com/r/Web_Development/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log('Reddit:' + body)
    }
  });
});
//value of the first a with the first class of title

module.exports = router;
