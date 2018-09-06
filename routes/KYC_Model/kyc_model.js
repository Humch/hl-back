'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CONST
var router = _express2.default.Router(); // IMPORT


router.get('/', function (req, res) {
  res.send('KYC MODEL');
});

router.post('/add', function (req, res) {
  res.send('ADD');
});

router.get('/get', function (req, res) {
  res.send('GET');
});

router.post('/get_for_user', function (req, res) {
  res.send('GET FOR USER');
});

router.get('/question/get', function (req, res) {
  res.send('GET QUESTION');
});

exports.default = router;
//# sourceMappingURL=kyc_model.js.map