require('dotenv').config();
const express = require('express');
const {addUserInfo, getUserInfo} = require('./controllers/userController');

const app = express();

app.use(express.json());

app.get('/api/userInfo', getUserInfo);
app.post('/api/userInfo', addUserInfo);

app.listen(process.env.PORT, () =>
  console.log('Listening on port ' + process.env.port),
);
