'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Vérification du login de l'utilisateur

router.post('/login', function (req, res) {
  var loginData = JSON.parse(_fs2.default.readFileSync('./json_files/requetes/user/user_login.json', 'UTF-8'));
  var login = false;
  for (var i = 0; i < loginData.length; i++) {
    if (loginData[i].email === req.body.email && loginData[i].password === req.body.password) {
      if (loginData[i].email === 'gilles@gmail.com') {
        var successLogin = _fs2.default.readFileSync('./json_test/user/user_login_a.json', 'UTF-8');
        res.send(successLogin);
        login = true;
      }
      if (loginData[i].email === 'bob@gmail.com') {
        var _successLogin = _fs2.default.readFileSync('./json_test/user/user_login_b.json', 'UTF-8');
        console.log(_successLogin);
        res.send(_successLogin);
        login = true;
      }
    }
  }
  if (!login) {
    res.status(401).send({ message: 'login failed' });
  }
});

router.post('/register', function (req, res) {
  res.send('ENREGISTRE TOI');
});

exports.default = router;
//# sourceMappingURL=user.js.map