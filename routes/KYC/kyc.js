'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CONST
// IMPORT
var router = _express2.default.Router();

router.get('/', function (req, res) {
  res.json({ 'test': 'KYC MA GUEULE' });
});

router.post('/form/:id', function (req, res) {
  var contenu = _fs2.default.readFileSync('./json_test/KYC/kyc_model_get_form_' + req.params.id + '.json', "UTF-8");
  res.json(contenu);
});

router.post('/set', function (req, res) {
  res.send('SET');
});

router.post('/authorisations/set', function (req, res) {
  res.send('AUTHORISATION / SET ');
});

exports.default = router;
//# sourceMappingURL=kyc.js.map