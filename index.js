'use strict';

const FirefoxClient = require('@cliqz-oss/firefox-client');

module.exports = connect;

function connect(port) {
  return new Promise(function(resolve, reject) {

    const client = new FirefoxClient();
    client.connect(port, function(err) {
      if (err) {
        reject(err);
      }
      resolve(client);
    });

    client.on('error', reject);
    client.on('timeout', reject);
  });
}
