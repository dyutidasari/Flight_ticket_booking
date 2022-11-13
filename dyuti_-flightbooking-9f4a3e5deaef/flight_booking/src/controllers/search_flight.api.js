const db = require("../service/db.service");
let user = db.Users;
const { sequelize } = require("../service/db.service");
const { QueryTypes, DataTypes } = require("sequelize");
const flight_details = require("../models/flight_details");

exports.searchflight = async (req, res) => {
    console.log(req.body)
    created_dateTime = new Date();
    let date = new Date();
    let year = created_dateTime.getFullYear();
    let month = ("0" + (created_dateTime.getMonth() + 1)).slice(-2);
    let day = ("0" + created_dateTime.getDate()).slice(-2);
    let hour = created_dateTime.getHours();
    let minute = created_dateTime.getMinutes();
    let seconds = created_dateTime.getSeconds();
    created_dateTime =
    year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + seconds;
    
    const { user_id} = req.body;
    const users = await user.findOne({
      where : {user_id }
    });
    console.log(user,"user..")
    let app_id = req.body.app_id;
    console.log(app_id,"1..")
    let version_number = req.body.version_number;
    console.log(version_number,"2...")
    if(!users) {
        return res.status(404).json({
            errorMessage:"user_id or date does not exist",
        });
    } if(users) {
        console.log(user,"usercheck")
        flightname = await sequelize.query(
      
            `select airline,flight_number from flight_master where id=${req.body.id} ;`,
            
          
          { type: QueryTypes.SELECT },
          { raw: true }
          );
          console.log(flightname,"flight_name")

        flightdetails = await sequelize.query(
      
            `select total_tickets,availble_tickets from flight_table where date = '${req.body.date}' ;`,
            
            { type: QueryTypes.SELECT },
            { raw: true }
            );
            console.log(flightdetails,"flight_details")

        username = await sequelize.query(
      
              `select first_name from usertable where user_id=${req.body.user_id};`,
              
              { type: QueryTypes.SELECT },
              { raw: true }
              );
              console.log(username,"username")  
              
          res.status(200).json({ 
            responseCode: 200, 
            flight_details:[
                flightname,
                username,
                flightdetails ,
            ]
                }
              )
            }
        else
        return res.status(404).json({
            responseCode: 404,
            errorMessage: "error",
        });
    }