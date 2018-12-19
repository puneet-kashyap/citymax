const functions = require("firebase-functions");
const admin = require('firebase-admin');
const express = require("express");
const cors = require("cors");
const dialogflow = require("./services/dialogflow/dialogflow.service");
const emailService = require("./services/nodemailer/email.service");
const notificationService = require("./services/notification/notification.service");

const app = express();
admin.initializeApp();

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


  // Cloud function to send notification for new chat
  exports.sentChatNotification = functions.firestore.document('/Chats/{chat}')
    .onCreate((snap, context) => {
      console.log("New chat initiated: ", snap.data());
      admin.firestore().collection('Tokens').get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            notificationService.sendChatNotification(doc.data().token)
            console.log('Token', doc.data().token)
            return doc.data().token
          })
        })
        .catch((err) => {
          console.log('Unable to retrieve tokens', err)
          return err
        })
    })

