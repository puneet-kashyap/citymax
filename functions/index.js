const functions = require("firebase-functions");
const express = require("express");
const dialogflow = require("./dialogflow/dialogflow.service");

const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/chat", (req, res) => {
  dialogflow.getResponse(req.query.id, res);
});

exports.api = functions.https.onRequest(app);
