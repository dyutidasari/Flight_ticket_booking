
const _ = require("lodash");
const db = require("../service/db.service");
const User = db.Users;
const flightmaster = db.flight_master
const validator = require("email-validator");
const bcrypt = require("bcrypt");
const { sequelize } = require("../service/db.service");
const { QueryTypes, DataTypes } = require("sequelize");



exports.flightmCreation = async (req, res) => {
    let created_dateTime = new Date();
    let year = created_dateTime.getFullYear();
    let month = ("0" + (created_dateTime.getMonth() + 1)).slice(-2);
    let day = ("0" + created_dateTime.getDate()).slice(-2);
    let hour = created_dateTime.getHours();
    let minute = created_dateTime.getMinutes();
    let seconds = created_dateTime.getSeconds();
    created_dateTime =
    year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + seconds;
    

    let user = await flightmaster.findOne({  where: {airline: req.body.airline }  });
    console.log(user,"1.....")

    let app_id = req.body.app_id;
    let version_number = req.body.version_number;
    let device_type = req.body.device_type;
    let device_id = req.body.device_id;
    console.log(app_id,version_number,device_type,device_id);
    if (user) {
      return res.status(400).json({
        responseCode: 400,
        errorMessage: "already exists",
      });
    } else {
        await flightmaster.create({
            airline: req.body.airline,
            IATA: req.body.IATA,
            ICAO: req.body.ICAO,
            flight_number: req.body.flight_number,
            created_date: created_dateTime,
            changed_date: created_dateTime,
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

