var mongoose = require('mongoose');
var settings = require('../settings');

module.exports = testEnv => {
  var dbName = settings.db + (testEnv ? '-test' : '');

  mongoose.connect(process.env.MONGODB_URI);
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
}
