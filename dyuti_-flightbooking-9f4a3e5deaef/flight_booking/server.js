const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const helmet = require("helmet");
const { application } = require("express");

let Userroutes = require("./src/routes/user.routes");


app.use(helmet());



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const db = require("./src/service/db.service");
const { profile } = require("winston");

db.sequelize.sync();

var allowlist = [
    "http://localhost:8081"
  ];
  var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (allowlist.indexOf(req.header("Origin")) !== -1) {
      corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
  };
  
  app.use(cors(corsOptionsDelegate));
  app.use(bodyParser.json());
  
  app.use("/api", Userroutes);


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
  // Logger.InfoLogger.log("info", "server runing on port ");
});
