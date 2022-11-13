const db = require("../service/db.service");
const User = db.Users;
const Userlog = db.Userlog;

exports.getall = async (req, res) => {
  let user_id = req.body.user_id
  console.log(user_id,"user_id");
    const user = await User.findOne({ where : {user_id} });
    console.log(user,"user");
    let version_number = req.body.version_number
    let app_id = req.body.app_id
    console.log(version_number, app_id, "checking")
    if(!user && app_id && version_number) {
      res.status(404).json({
      errorMessage:"user_id or date does not exist",
    });
  }
  User.findAll()
  .then((User) => {
    res.status(200).json({
      responseCode: 200,
      message: "Get all User Success",
      UserList: User,
    });
  })
  .catch((error) => {
    console.log(error);
    res.status(400).json({
      responseCode: 400,
      message: "Error in getting all users",
      error: error,
    });
  });
};