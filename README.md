# node-firefox-connect

> Connects to a Firefox debuggable runtime.

[![Install with NPM](https://nodei.co/npm/@cliqz-oss/node-firefox-connect.png?downloads=true&stars=true)](https://nodei.co/npm/@cliqz-oss/node-firefox-connect/)

This is part of the [node-firefox](https://github.com/cliqz-oss/node-firefox) project.

## Installation

### From git

```sh
git clone https://github.com/cliqz-oss/node-firefox-connect.git
cd node-firefox-connect
npm install
```

If you want to update later on:

```sh
cd node-firefox-connect
git pull origin master
npm install
```

### npm

```bash
npm install @cliqz-oss/node-firefox-connect
```

## Usage

Connects to a Firefox runtime, given a port number, and returns a [client](https://github.com/harthur/firefox-client) that can be used to interact with said client.

```javascript
// `connect` returns a Promise
connect(portNumber).then(function(client) {

});
```

## Example

```javascript
var connect = require('@cliqz-oss/node-firefox-connect');

connect(1234)
  .then(function(client) {
    // Let's show for example all the running apps
    client.getWebapps(function(err, webapps) {
      webapps.listRunningApps(function(err, apps) {
        console.log("Running apps:", apps);
      });
    });
  });
```

## History

This is based on initial work on fxos-connect by Nicola Greco.
