import React from "react";
import { messaging } from "./init-fcm";
import { compose, lifecycle, withState } from "recompose";

const serverkey = "AAAAA4UZymc:APA91bFXG3lg8yMD_bzYpdcogMGbSTk1ER7pC4cDp9xH9aK5tOj_sgyW7npUA3j7osNy1vUn4JgxhHE3ES9dkqkZo259NrC1uJ8joGh5m_FSPUbygpGFDlcpvrssEcAa8WysAXgkLLDe";
function bodyParameter(token) {
  const collection = {
    "notification": {
      "title": "Firebase 1",
      "body": "Firebase is awesome",
      "click_action": "http://localhost:3000/",
      "icon": "http://url-to-an-icon/icon.png"
    },
    "to": token
  };
  return collection;
};

const App = ({ token }) => (
  <>
    <h1>React + Firebase Cloud Messaging (Push Notifications)</h1>
    <div>
      API/Server key: <p>{serverkey}</p>
    </div>
    <div>
      Current token is: <p>{token}</p>
    </div>
    <div>
      Postman Details :
      <ul>
        <li><b>Endpoint:</b> https://fcm.googleapis.com/fcm/send</li>
        <li><b>Method:</b> POST</li>
        <li><b>Header:</b> <br /> 1. Authorization : <b>key={serverkey}</b> <br />
        2.Content-Type : <b>application/json</b></li>
        <li><b>Body Parameter:</b><br /><b></b><div><pre>{JSON.stringify(bodyParameter(token), null, 2) }</pre></div></li>
      </ul>
    </div>
  </>
);

export default compose(
  withState("token", "setToken", ""),
  lifecycle({
    async componentDidMount() {
      const { setToken } = this.props;
      messaging
        .requestPermission()
        .then(async function() {
          const token = await messaging.getToken();
          console.log('xxx', token)
          setToken(token);
        })
        .catch(function(err) {
          console.log("Unable to get permission to notify.", err);
        });
    }
  })
)(App);
