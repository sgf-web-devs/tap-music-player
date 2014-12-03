tap-music-player
================
This is just a sample, and a messy one at that, of how to implement the Libspotify player via node.js in the terminal.  Sorry, this will likely not run on windows.

The logic is based off the paths and configs of https://github.com/sgf-web-devs/tap-music

Make sure to put your spotify key in the root and name it something like spotify_appkey.key

Libspotify will need to be installed globally since node-spotify depends on it.  Read more at http://www.node-spotify.com/

In routes/index.js fill in all of the config values peppered throughout

Be sure to run npm install to fetch dependencies and optionally install gulp globally

Run gulp and after a bit you should see the console log out that it is ready.  You can now now push song-play event with a spotify track string through pusher and the player should spin up.  On endOfTrack, this example will reach out to the web app to find the next song in the list

Many much refinements to come