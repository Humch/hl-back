// IMPORT
import express from 'express';
import fs from 'fs';

// CONST
const router = express.Router();


// router.get('/', (req, res) => {
//   res.send('HELLLOOOO USER');
// });

router.post('/send', (req, res) => {
  if (req.body.receiver === 'gilles@gmail.com') {
    const content = fs.readFileSync('./json_test/notification/notification_get_received.json', 'UTF-8');
    let contentObject = JSON.parse(content);
    contentObject.items.push({
      _id: 'notif_4',
      company: 'the New Company'
    });
    console.log(contentObject);
    fs.writeFileSync('./json_test/notification/notification_get_received.json', JSON.stringify(contentObject), 'UTF-8');
    res.send('success');
  } else {
    res.status(403).send({ message: 'utilisateur inconnu' });
  }
});

router.post('/get_received', (req, res) => {
  const content = fs.readFileSync('./json_test/notification/notification_get_received.json', "UTF-8");
  res.json(content);
});

export default router;

