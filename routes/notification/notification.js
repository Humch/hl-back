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

// router.get('/', (req, res) => {
//   res.send('HELLLOOOO USER');
// });

router.post('/send', function (req, res) {
  if (req.body.receiver === 'gilles@gmail.com') {
    var content = _fs2.default.readFileSync('./json_test/notification/notification_get_received.json', 'UTF-8');
    var contentObject = JSON.parse(content);
    contentObject.items.push({
      _id: 'notif_4',
      company: 'the New Company'
    });
    console.log(contentObject);
    _fs2.default.writeFileSync('./json_test/notification/notification_get_received.json', JSON.stringify(contentObject), 'UTF-8');
    res.send('success');
  } else {
    res.status(403).send({ message: 'utilisateur inconnu' });
  }
});

router.post('/get_received', function (req, res) {
  var content = _fs2.default.readFileSync('./json_test/notification/notification_get_received.json', "UTF-8");
  res.json(content);
});

exports.default = router;
//# sourceMappingURL=notification.js.map