'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _ncp = require('ncp');

var _ncp2 = _interopRequireDefault(_ncp);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CONST
var app = (0, _express2.default)();

// IMPORT INDEX

var debug = (0, _debug2.default)('back:app');

(0, _ncp2.default)('./json_files/reponses', './json_test', function (err) {
  if (err) {
    return console.error(err);
  }
});

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
  extended: false
}));

app.use((0, _cookieParser2.default)());

app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

// DEFINITION ROUTE INDEX = /API
app.use('/api', _index2.default);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

// Port utilisé pour le serveur en local
var listener = app.listen(8888, function () {
  console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});

// Handle uncaughtException
process.on('uncaughtException', function (err) {
  debug('Caught exception: %j', err);
  process.exit(1);
});

exports.default = app;
// module.exports = app;
//# sourceMappingURL=app.js.map