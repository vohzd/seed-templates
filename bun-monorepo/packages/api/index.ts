import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import fs from "fs";
import helmet from "helmet";
import https from "https";

import accountRoutes from "./routes/account.js";
import testRoutes from "./routes/test.js";

const app = express();
const port = 8080;

// SSL Certificate and Key paths
// TODO, discard this for production, as we'll use a reverse proxy (nginx) to handle https
const options = {
  key: fs.readFileSync("config/dev-certificates/server.key"), // Replace with path to your key
  cert: fs.readFileSync("config/dev-certificates/server.cert"), // Replace with path to your cert
};

// server setup
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    // todo, switch origin to a whitelist in production
    origin: true, // reflect (enable) the requested origin in the CORS response
    credentials: true, // allow cookies to be sent
    methods: "PUT, POST, GET, DELETE, OPTIONS",
  })
);

// routes
app.get("/", (req, res) => res.end("pong"));
app.use("/account", accountRoutes);
app.use("/test", testRoutes);

// Start HTTPS server
https.createServer(options, app).listen(port, () => {
  console.log(`Listening on HTTPS port ${port}...`);
});
