import "./App.css";

// components
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

import { GoogleOAuthProvider } from "@react-oauth/google";


function App() {

  const clientId =
    "819477049756-oe99bokuj58mr5hmc8vvdo76tkh7qnh7.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider >
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
