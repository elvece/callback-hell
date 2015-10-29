var express = require('express');
var router = express.Router();
var fs = require('fs');
var request=require("request");
var cheerio=require("cheerio");

var urls = {
  hacker: 'https://news.ycombinator.com/',
  reddit: 'https://www.reddit.com/r/Web_Development/',
  python: 'https://python.org/',
  mozilla: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
};

function hasJavascript(url, selector, cb){
  //get html
  request(url, function(err, reponse, html){
    //parse html
    var $ = cheerio.load(html);
    var title = $(selector).first().text();

    //is javascript in the title?
    if (title.match('javascript')){
      cb(null, true);
    } else {
      cb(null, false);
    }
  });
}

router.get('/hell', function(req, res, next) {

  var test = hasJavascript(urls.hacker, 'td.title a', function(err, results){
    if (err) {
      console.log('something went wrong');
    }
      res.send(results);
  });




//   //ajax request
//   var newsUrl = 'https://news.ycombinator.com/';
//   var newsHtml = request(newsUrl, function (error, response, html){
//     //parse html
//     var $ = cheerio.load(html);
//     var newsTitle = $('td.title a').first().text();

//     //is javascript in the title
//     var newsHasJavascript = newsTitle.match('javascript');
//     // console.log('line 24', hasJavascript);

//     if (!newsHasJavascript) {
//       //request python.org, return something fun
//       var pythonUrl = 'https://python.org';
//       var pythonHtml = request(pythonUrl, function(err, response, html){

//         var $ = cheerio.load(html);
//         var pythonLogo = $('img').attr('src');
//         res.send('<img src="https://python.org/'+pythonLogo+'">');


//       });

//     } else {
//       //request reddit, parsre, test if javascript is part of the title
//       //if yes
//         //request mdn, return something fun
//       //if no
//         //request puthon.org, return something fun

//       //ajax request
//       var redditUrl = 'https://www.reddit.com/r/Web_Development/';
//       var redditHtml = request(redditUrl, function(err, response, html){
//         //parse html
//         var $ = cheerio.load(html);
//         var redditTitle = $('a.title').first().text();

//         //is javascript in the title
//         var redditHasJavascript = redditTitle.match('javascript');
//         // console.log('right here', redditHasJavascript);

//         if (!redditHasJavascript){
//           //request python.org, return something fun
//           var pythonUrl = 'https://python.org';
//           var pythonHtml = request(pythonUrl, function(err, response, html){

//             //parse html
//             var $ = cheerio.load(html);
//             var pythonLogo = $('img').attr('src');
//             res.send('<img src="https://python.org/'+pythonLogo+'">');
//         });
//       } else {
//         var mdnUrl = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
//         var mdnHtml = request(mdnUrl, function(err, response, html){
//           var $ = cheerio.load(html);
//           var tab = $('#tabzilla');
//           res.send(tab);
//         });
//       }
//     });
//     }
//   });
// });

// router.get('/hellway', function(req, res, next){
//   request('https://www.reddit.com/r/Web_Development/', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       // console.log('Reddit:' + body)
//     }
//   });
});

module.exports = router;
