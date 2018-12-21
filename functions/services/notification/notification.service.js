const admin = require('firebase-admin');

const sendChatNotification = token => {
  const registrationToken = token;
  const message = {
    token: registrationToken,
    webpush: {
      notification: {
        title: 'CitiMax new chat user',
        body: 'Some body wants to chat on CitiMax website',
        icon: 'https://citimaxenterprises.com/favicon.ico',
        click_action: 'https://citimaxenterprises.com/admin'
      }
    }
  };

  admin.messaging().send(message)
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
