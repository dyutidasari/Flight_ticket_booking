const _ = require("lodash");
const bcrypt = require("bcrypt");
const db = require("../service/db.service.js");
const User = db.Users;

exports.userlogin = async (req, res) => {
  let created_dateTime = new Date();
    let year = created_dateTime.getFullYear();
    let month = ("0" + (created_dateTime.getMonth() + 1)).slice(-2);
    let day = ("0" + created_dateTime.getDate()).slice(-2);
    let hour = created_dateTime.getHours();
    let minute = created_dateTime.getMinutes();
    let seconds = created_dateTime.getSeconds();
    created_dateTime =
    year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + seconds;
    
  const { phone_number, password } = req.body;
  const user = await User.findOne({
    where : { phone_number }
  });
  let app_id = req.body.app_id;
  let version_number = req.body.version_number
  console.log(app_id,version_number);
  if(!user && app_id && version_number)
  return res.status(404).json({
    errorMessage:"phone_number does not exist",
  });
  console.log(user, 'database password');
  const validatePassword = await bcrypt.compare(
    password,
    user.password,
    )
    
    if(!validatePassword) {
      res.status(400).json({ errorMessage: "password does not match" })
    } else {
    res.status(200).json({ 
      responseCode: 200, 
      message: "Login successful",
      user: _.pick(user, [
        "user_id",
        "email_id",
        "first_name",
        "last_name",
        "phone_number",
        "status",
      ]),
    })
  }
};