const express = require('express');
const router = express.Router();

const charController = require('./../controllers/characterController');
// api/chars

router.post('/create',  charController.createChar);
router.get('/favorites/:userId',  charController.getFavoriteCharacters);
router.get('/fetch/:page',  charController.fetchMainApi);
router.delete('/delete/:id',  charController.removeCharacter);

router.post('/favorites', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Data Accessed',
        authData  
      });
    }
  })
});


// Authorization: Bearer <token>
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined') {
    const token = bearerHeader.split(' ')[1];
    req.token = token;
    next();
  } else {
    res.sendStatus (403);
  }
}

module.exports = router;