importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");


const firebaseConfig = {
    apiKey: "AIzaSyAMaJCiamzrLmZan1rXAla7XlxGKiJzQPY",
    authDomain: "property-management-admin-old.firebaseapp.com",
    projectId: "property-management-admin-old",
    storageBucket: "property-management-admin-old.appspot.com",
    messagingSenderId: "862519190992",
    appId: "1:862519190992:web:2d113ca774221fbadac5d5",
    measurementId: "G-8HDJN4NHKD"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
