
const _ = require("lodash");
const db = require("../service/db.service");
const User = db.Users;
const validator = require("email-validator");
const bcrypt = require("bcrypt");

exports.userCreation = async (req, res) => {
    let created_dateTime = new Date();
    let year = created_dateTime.getFullYear();
    let month = ("0" + (created_dateTime.getMonth() + 1)).slice(-2);
    let day = ("0" + created_dateTime.getDate()).slice(-2);
    let hour = created_dateTime.getHours();
    let minute = created_dateTime.getMinutes();
    let seconds = created_dateTime.getSeconds();
    created_dateTime =
    year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + seconds;
    
    const salt =  await bcrypt.genSalt(10);
    let password = await bcrypt.hash(req.body.password, salt);
    
    let email_id = validator.validate(req.body.email_id)
    if (!email_id){
        return res.status(400).send("email validation failed")
    }
    let user = await User.findOne({  where: {phone_number: req.body.phone_number }  });
    console.log(user,"1.....")

    let app_id = req.body.app_id;
    let version_number = req.body.version_number;
    let device_type = req.body.device_type;
    let device_id = req.body.device_id;
    console.log(app_id,version_number,device_type,device_id);
    if (user) {
      return res.status(400).json({
        responseCode: 400,
        errorMessage: "user already exists",
      });
    } else {
        await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name, 
            email_id: req.body.email_id,
            password: password,
            phone_number: req.body.phone_number,
            user_role: 'A',
            created_by: 1,
            updated_by: 1,
            created_date_time: created_dateTime,
            updated_date_time: created_dateTime,
            status: 'A',
        })
        .then(users => {
            res.status(200).json({
                responseCode: 200,
                message: "user was created successfully",
                user: users
            })
        })
        .catch((error) => {
            console.log('1',error)
            res.status(500).json({
                responseCode: 500,
                errorMessage: "error"
            });
        });
    }
}

