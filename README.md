# TAP Music Player CLI

This is the repository that houses music playing components via the command line by which the [TAP Music](https://github.com/sgf-web-devs/tap-music) interface interacts with for development purposes. Additional software is required for setting up streaming over a WAN network.

Windows is not directly supported by the [node-spotify](http://www.node-spotify.com/) project.

## Installation

This process is not an exact sience. OS paths will vary, compiling will vary, and you will be pulling your hair.

If you have not already, please install the [TAP Music](https://github.com/sgf-web-devs/tap-music-player) interface first. It'll help you have some of the more primary settings/configurations ready and available. The following instructions will primarly focus on the libspotify compiling and Installation to play music.

**Please follow steps 1 - 4 in order.**

#### Things You'll Need

1. [Spotify Developer Account](https://developer.spotify.com/) *Note: this requires a premium Spotify account.*
2. [Node.js](http://nodejs.org/download/)
3. [Pusher](https://pusher.com/) *Note: this is a free service*
4. [libspotify](https://developer.spotify.com/technologies/libspotify/)

### 1 Spotify Developer Key

Go to [Spotify Account Keys](https://devaccount.spotify.com/my-account/keys/) and follow the instructions to create keys for the application. When you are done with the process, download the **binary** version of the key and DO NOT CHANGE THE DOWNLOAD NAME. This file will be moved as is into the location of the repository.

### 2 Libspotify

#### 2.1 Mac OSx

##### 2.1.1 Homebrew

There are many ways to install on a Mac OSx system. The simplest way is via [Homebrew](http://brew.sh/). 

```
$ brew update
$ brew install libspotify
```

*NOTE: If brew spits out a nasty error, try doing what it says to do `$ brew install /homebrew/binary/libspotify`*

##### 2.1.2 libspotify.framework

*NOTE: This is probably the worst method of installing the library. This is mainly meant for XCode applications that will utilize the framework.*

Go to [libspotify Downloads](https://developer.spotify.com/technologies/libspotify/#download) and download the `Mac OS X/Darwin` version.

After the download, unzip it, and move the **libspotify.framework** to **/Library/Frameworks/** directory.


#### 2.2 GNU Linux

Installing libspotify on a GNU Linux system couldn't be any easier. Simply to go [libspotify Downloads](https://developer.spotify.com/technologies/libspotify/#download) and download the version that matches your systems architecture. 

For example, if you have a 64bit Intel processor, it's a safe bet to download the `x86_64` version. `x86` is if your system is 32bit Intel. The other versions are for ARM/AMD processors.

After you download, untar the the download and then open up your terminal.

```
$ cd ~/Downloads/libspotify-12.1.51-Linux-xxxx-release
$ make install
```

This will install the GNU Linux version of libspotify in **/usr/local/** directory.

*NOTE: As specified in the README of the download, the install path can be changed to whatever you want, but keep in mind, node-spotify will run into issues as it is looking for the global install of the library in the **/usr/local/** directory.*

#### 2.3 Windows

TODO

### 3 TAP Music Player

Time for the moment of truth! 

Clone down the repository
```
$ git clone https://github.com/sgf-web-devs/tap-music-player
$ cd tap-music-player
```

Run the following command
```
$ npm install
```

This is the part of the install that gets hairy... Depending how you installed libspotify will determine what errors may arise. 

#### 3.1 Mac OSx/GNU Linux

The most likely problem you'll encounter is node-gyp locating the libspotify install in **/usr/local/** 

On Mac OSx this may cause the most issues. If you're unable to resolve the problem, please post to the issues and we'll take a look at what you need to to. As a safe-bet, try installing it the GNU Linux way if you do not want to deal with the issues.

#### 3.2 Windows

The most likely issue with Windows is the pthreads support.

Please have a look at [POSIX Threads for Win32](https://www.sourceware.org/pthreads-win32/) to download and install POSIX Threads on Windows.

Additional solutions to come as people try to install this application.

### 4 Configuration

*NOTE: Configuration will be tracked in the repository. The application was thrown on github in a rush, and therefore proper configuration measure have not yet taken place to have a successfull pull on updates.*

All configuration is handled in the **routes/index.js** file.

Replace
```javascript
var socket = new PusherClient('YOUR KEY');
var my_channel = socket.subscribe('YOUR CHANNEL');
```

With your `key` and `my_channel_name` that you're using on the [TAP Music Interface](https://github.com/sgf-web-devs/tap-music)

Replace
```javascript
var options = {
	host: 'yourhost.com',
    ...
};
```

With the URI defined by your vhost from the [TAP Music Interface](https://github.com/sgf-web-devs/tap-music)

Replace
```javascript
var pusher = new Pusher({
  appId: 'YOUR ID',
  key: 'YOUR KEY',
  secret: 'YOUR SECRET'
});
```

With your `app_id`, `key`, and `secret` from your Pusher App.

Replace 
```javascript
spotify.login('YOURUSERNAME', 'YOURPASSWORD', false, false);
```

With your username, and password from Spotify.


## Usage
Simply run the following command in the root of the repository.
```
$ gulp
```

By default the player wont do anything, really. It will only play music once you load songs into the queue from the [TAP Music](https://github.com/sgf-web-devs/tap-music-player) interface.

## Streaming
There is a darkice.cfg sample file to use to optionally broadcast your audio to an icecast server.

## Development
TODO
