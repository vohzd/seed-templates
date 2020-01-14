const bodyParser                    = require("body-parser");
const cookieParser                  = require("cookie-parser");

module.exports = (app) => {

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    next();
  });

};
