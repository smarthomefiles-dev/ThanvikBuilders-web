importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

// Same Firebase web config as lib/firebase_options.dart - safe to expose
// client-side (Firebase web API keys are not secrets, access is controlled
// by security rules, not by hiding this key).
firebase.initializeApp({
  apiKey: 'AIzaSyDK7rmBUlGUAbJoiso5rMIgDh1aEwOTptY',
  appId: '1:911766552496:web:d1a1c1e8a42c40c7c3a075',
  messagingSenderId: '911766552496',
  projectId: 'smarthome-99500',
  authDomain: 'smarthome-99500.firebaseapp.com',
  storageBucket: 'smarthome-99500.firebasestorage.app',
});

const messaging = firebase.messaging();

// Background/terminated messages - shows the OS notification while the
// web app tab isn't focused. Foreground messages are handled in Dart via
// FirebaseMessaging.onMessage (see lib/services/push_notification_service.dart).
messaging.onBackgroundMessage((payload) => {
  const notification = payload.notification || {};
  self.registration.showNotification(notification.title || 'Notification', {
    body: notification.body || '',
    icon: '/icons/Icon-192.png',
  });
});
