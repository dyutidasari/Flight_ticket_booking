const db = require("../service/db.service");

const flightmaster = db.flight_master;


exports.filghtmdelete = (req, res) => {
    const id = req.params.id;
    flightmaster.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.status(200).send({
            responseCode: 200,
            message: "id was deleted successfully!"
          });
        } else {
          res.status(400).send({
            responseCode: 400,
            errorMessage: `Cannot delete id with id=${id}. Maybe id was not found!`
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
