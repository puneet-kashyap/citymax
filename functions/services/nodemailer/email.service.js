const nodemailer = require("nodemailer");
const functions = require("firebase-functions");

const mailTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: functions.config().email.id,
    pass: functions.config().email.pass
  }
});

const sendInquiryEmail = form => {
  const mailOptions = {
    from: `CitiMax Enterprises <noreply@citimaxenterprises.com>`,
    to: functions.config().email.recipient,
    bcc: functions.config().email.recipient_bcc
  };

  mailOptions.subject = `CitMax inquiry request`;
  mailOptions.text = `
Hey Gaurav!

A prospective CitiMax student has requested some information on your website.
Please check the details below to follow up:

    Name:               ${form.name || ""}
    Email:              ${form.email || ""}
    Phone:              ${form.phone || ""}
    Destination:        ${form.destination || ""}
    Date:               ${form.date.toDate().toDateString() || ""}
    Comments:           ${form.comments || ""}


See you abroad.


Sincerely,
CitiMax Students Club.`;

  return mailTransport.sendMail(mailOptions).then(() => {
    console.log(
      "New booking email sent to:",
      functions.config().email.recipient
    );
  });
};

module.exports = {
  sendInquiryEmail
};
