let userInfo = {
  parentName: '',
  name: '',
  age: 0,
  sex: '',
  conversational: '',
  playful: '',
  school: '',
  focus: '',
};

const getUserInfo = (req, res) => {
  res.status(200).json(userInfo);
};

const addUserInfo = (req, res) => {
  userInfo = req.body;
  res.status(200).json(userInfo);
};

module.exports = {
  addUserInfo,
};
