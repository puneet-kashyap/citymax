const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const dialogflow = require("./services/dialogflow/dialogflow.service");
const emailService = require("./services/nodemailer/email.service");

const app = express();
app.use(cors({ origin: true }));

app.get("/chat", (req, res) => {
  dialogflow.getResponse(req.query, res);
});

exports.api = functions.https.onRequest(app);

// Cloud function to send email for inquiry form
exports.sendInquiryInfo = functions.firestore
  .document("/Inquiry/{inquiryId}")
  .onCreate((snap, context) => {
    console.log("Inquiry form: ", snap.data());
    emailService.sendInquiryEmail(snap.data());
  });
