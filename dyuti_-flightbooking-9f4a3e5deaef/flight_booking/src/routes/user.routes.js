const express = require("express");
const router = express.Router();


const userRoute = require("../controllers/user.api");
const loginRoute = require("../controllers/login.api");
const getuserRoute = require("../controllers/getuser.api");
const updateuser = require("../controllers/updateuser.api");
const deleteUser = require("../controllers/delete.api");
const flightmastercreate = require("../controllers/create_flight.api");
const flightmasterdelete = require("../controllers/delete_flight.api");
const searchflight = require("../controllers/search_flight.api");
const getticketbooking = require("../controllers/get_ticketbooking.api");

router.post("/create_user", userRoute.userCreation);
router.post("/login", loginRoute.userlogin);
router.get("/getusers", getuserRoute.getall);
router.put("/update_user", updateuser.userUpdates);
router.delete("/deleteUser/:user_id", deleteUser.deleteuser);
router.post("/createflight", flightmastercreate.flightmCreation);
router.delete("/deleteflight/:id", flightmasterdelete.filghtmdelete);
router.post("/search_flight", searchflight.searchflight);
router.get("/get_ticket_booking", getticketbooking.getticketbookingdata);

module.exports = router;
