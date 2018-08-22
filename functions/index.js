const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const dialogflow = require("./dialogflow/dialogflow.service");

const app = express();
app.use(cors({ origin: true }));

// app.get("/", (req, res) => res.send("Hello World!"));

app.get("/chat", (req, res) => {
  dialogflow.getResponse(req.query.msg, res);
});

exports.api = functions.https.onRequest(app);
