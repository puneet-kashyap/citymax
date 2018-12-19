const admin = require('firebase-admin');

const sendChatNotification = token => {
  const message = {
    message: {
      token,
      notification: {
        title: 'New Chat initialized',
        body: 'Some body wants to chat with you on website'
      }
    }
  };

  admin.messaging().send((message, dryRun))
    .then(response => {
      console.log('Successfully sent message:', response);
    })
    .catch(error => {
      console.log('Error sending message:', error);
    });
};

module.exports = {
  sendChatNotification
};
