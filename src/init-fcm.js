import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyAFam9_pURlo69BU5rceiQ_cq_DnzpTHBk",
  authDomain: "pwa-test-4e9e5.firebaseapp.com",
  // databaseURL: "https://freelancer-project-458f2.firebaseio.com",
  projectId: "pwa-test-4e9e5",
  storageBucket: "pwa-test-4e9e5.appspot.com",
  messagingSenderId: "15117961831",
  appId: "1:15117961831:web:b40799230ea051b868e2c2",
  measurementId: "G-09LCBS5W8L"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BNB3kqDi1omJsopu3V9Tsifn0JW0TASL5e3Ggi0XS8kzv5BTHrxSuSimmYtgoDlGRTjig9W4xy-TfqjAxVRVbTU"
);

export { messaging };
