var express = require('express');
var router = express.Router();
var fs = require('fs');
var request=require("request");
var cheerio=require("cheerio");

router.get('/hell', function(req, res, next) {
  //ajax request
  var url = 'https://news.ycombinator.com/';
  var html = request(url, function (error, response, html){
    //parse html
    var $ = cheerio.load(html);
    var title = $('td.title a').first().text();

    //is javascript in the title
    var hasJavascript = title.match('javascript');
    console.log('line 24', hasJavascript);

    if (!hasJavascript) {
      //request python.org, return something fun
    } else {
      //request reddit, parsre, test if javascript is part of the title
      //if yes
        //request mdn, return something fun
      //if no
        //request puthon.org, return something fun
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
