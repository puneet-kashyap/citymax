const admin = require('firebase-admin');

const sendChatNotification = token => {
  const registrationToken = token
  const message = {
    token: registrationToken,
    notification: {
      title: 'New Chat initialized',
      body: 'Some body wants to chat with you on website'
    }
  };

  admin.messaging().send((message))
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
