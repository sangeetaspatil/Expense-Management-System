const User = require('../models/user')

module.exports.userLogin = async (req, res) => {
  try {
    const {email, password} = req.body
    const user = await User.findOne({email, password})
    if(!user){
      return res.status(404).send('User not found');
    }
    res.status(200).json({
      success:true,
      user,
    });
  } catch (err){
    res.status(400).json({
      success:false,
      err,
    })

  }
};

module.exports.userRegister = async (req,res) => {
  try {
    const newUser = new User(req.body)
    await newUser.save();
    res.status(201).json({
      success:true,
      newUser,
    });
  } catch (err){
      res.status(400).json({
        success:false,
        err,
      })

  }
};