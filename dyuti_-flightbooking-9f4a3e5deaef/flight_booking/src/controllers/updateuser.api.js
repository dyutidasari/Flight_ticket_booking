const db = require("../service/db.service");
let User = db.Users;



exports.userUpdates = async (req, res) => {
  console.log(req.body)
  let created_dateTime = new Date();
  let year = created_dateTime.getFullYear();
  let month = ("0" + (created_dateTime.getMonth() + 1)).slice(-2);
  let day = ("0" + created_dateTime.getDate()).slice(-2);
  let hour = created_dateTime.getHours();
  let minute = created_dateTime.getMinutes();
  let seconds = created_dateTime.getSeconds();
  created_dateTime =
  year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + seconds;
  // console.log("creating");
  let user_id = req.body.user_id;

  const user = await User.findOne({
    where : {user_id }
  });
  let app_id = req.body.app_id;
  let version_number = req.body.version_number
  let device_id =req.body.device_id
  console.log(device_id);
  let device_type = req.body.device_type
  console.log(device_type);
  console.log(app_id,version_number);
  if(!user && app_id && version_number) return res.status(404).json({
    errorMessage:"user_id or date does not exist",
  });
  
  User.update( {
    user_id: user_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name, 
    email_id: req.body.email,
    phone_number: req.body.phone_number,
    user_role: 'a',
    created_date: created_dateTime,
    updated_date: created_dateTime,
    status: 'a',
  }, {where : { user_id: user_id},}
  )
  .then(User => {
    if (User) {
      res.status(200).send({
        responseCode: 200,
        message: "updated successfully."
      });
    } else {
      res.status(400).send({
      errorMessage: `Cannot update user with user_id=${user_id}. Maybe user_id was not found or req.body is empty!`
    });
  }
})
.catch(err => {
  res.status(500).send({
    responseCode: 500,
    errorMessage: "failed to update user"
  });
});
};




  



