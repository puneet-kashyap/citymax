importScripts('https://www.gstatic.com/firebasejs/5.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.7.0/firebase-messaging.js');

firebase.initializeApp({
  'messagingSenderId': '103953800507'
});

const messaging = firebase.messaging();

messaging.getToken().then(function(currentToken) {
    if (currentToken) {
      console.log(`Service worker current token ${currentToken}`)
    } else {
      console.log('No Instance ID token available. Request permission to generate one.');
    }
  })
  .catch(function(err) {
    console.log('An error occurred while retrieving token. ', err);
  });


messaging.setBackgroundMessageHandler(function (payload) {
  console.log('Received background message ', payload);
  const notificationOptions = {
    icon: '/assets/icons/icon-128x128.png'
  };
  return self.registration.showNotification('notificationTitle', notificationOptions);
});