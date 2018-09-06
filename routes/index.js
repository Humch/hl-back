'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('./user/user');

var _user2 = _interopRequireDefault(_user);

var _kyc_model = require('./KYC_Model/kyc_model');

var _kyc_model2 = _interopRequireDefault(_kyc_model);

var _kyc = require('./KYC/kyc');

var _kyc2 = _interopRequireDefault(_kyc);

var _notification = require('./notification/notification');

var _notification2 = _interopRequireDefault(_notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CONST
var router = _express2.default.Router();

// ROUTER USE
// IMPORT
router.use('/user', _user2.default);
router.use('/kyc_model', _kyc_model2.default);
router.use('/kyc', _kyc2.default);
router.use('/notification', _notification2.default);

/* GET index page. */
router.get('/', function (req, res) {
  res.json({
    title: 'Coucou Happy Ledger'
  });
});

exports.default = router;
//# sourceMappingURL=index.js.map