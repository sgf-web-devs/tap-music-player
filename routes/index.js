var _ = require('lodash');
var express = require('express');
var router = express.Router();
var spotify = require('node-spotify')({ appkeyFile: './spotify_appkey.key' });
var Pusher = require('pusher');
var PusherClient = require('pusher-client');
var http = require('http');


var socket = new PusherClient('YOUR KEY');
var my_channel = socket.subscribe('YOUR CHANNEL');
socket.bind('song-play',
  function(data) {
    var track = spotify.createFromLink(data.message);
    console.log(track);
    //console.log(data.message);
	spotify.player.play(track);
  }
);





spotify.player.on({
    endOfTrack: function(){
    	console.log('ennnnd');
      var options = {
        host: 'yourhost.com',
        path: '/queue/next-song' // or wherever you are pulling the next song from
      };

      callback = function(response) {
        var str = '';

        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function (chunk) {
          str += chunk;
        });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function () {
          console.log(str);
          var track = spotify.createFromLink(str);
          console.log(track);
          //console.log(data.message);
          spotify.player.play(track);
        });
      }

      http.request(options, callback).end();
    }
});


var pusher = new Pusher({
  appId: 'YOUR ID',
  key: 'YOUR KEY',
  secret: 'YOUR SECRET'
});



var ready = function()  {
	console.log('ready');
};

spotify.on({
	ready: ready
});

spotify.login('YOURUSERNAME', 'YOURPASSWORD', false, false);


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router