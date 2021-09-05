importScripts("https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.14.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyAFam9_pURlo69BU5rceiQ_cq_DnzpTHBk",
  authDomain: "pwa-test-4e9e5.firebaseapp.com",
  // databaseURL: "https://freelancer-project-4538f2.firebaseio.com",
  projectId: "pwa-test-4e9e5",
  storageBucket: "pwa-test-4e9e5.appspot.com",
  messagingSenderId: "15117961831",
  appId: "1:15117961831:web:b40799230ea051b868e2c2",
  measurementId: "G-09LCBS5W8L"
});

firebase.messaging();
