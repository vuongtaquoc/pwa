const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    // const swUrl = process.env.NODE_ENV === 'production'? '/firebase-messaging-sw.js': ' http://localhost:3001/sw/firebase-messaging-sw.js';
    const swUrl = '/firebase-messaging-sw.js'

    navigator.serviceWorker
      .register(swUrl)
      .then(function(registration) {
        console.log("Registration successful, scope is:", registration.scope);
      })
      .catch(function(err) {
        console.log("Service worker registration failed, error:", err);
      });
  }
};

export { registerServiceWorker };
