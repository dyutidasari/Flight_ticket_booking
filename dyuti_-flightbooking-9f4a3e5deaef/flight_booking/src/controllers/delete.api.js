const db = require("../service/db.service");

const User = db.Users;


exports.deleteuser = (req, res) => {
    const user_id = req.params.user_id;
    User.destroy({
      where: { user_id: user_id }
    })
      .then(num => {
        if (num == 1) {
          res.status(200).send({
            responseCode: 200,
            message: "user_id was deleted successfully!"
          });
        } else {
          res.status(400).send({
            responseCode: 400,
            errorMessage: `Cannot delete user_id with id=${id}. Maybe user_id was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
            responseCode: 500,
            errorMessage: "Could not delete user_id with user_id=" + user_id
        });
      });
  };
