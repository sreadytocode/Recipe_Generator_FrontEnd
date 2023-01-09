import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { ContextProvider } from '../src/components/login/contexts/ContextProvider'
import { Auth0Provider } from "@auth0/auth0-react";
import { getConfig } from "./config";

const root = ReactDOM.createRoot(document.getElementById("root"));


const onRedirectCallback = (appState) => {
    history.push(
      appState && appState.returnTo ? appState.returnTo : window.location.pathname
    );
  };
  
  // Please see https://auth0.github.io/auth0-react/interfaces/Auth0ProviderOptions.html
  // for a full list of the available properties on the provider
  const config = getConfig();
  
  const providerConfig = {
    domain: config.domain,
    clientId: config.clientId,
    ...(config.audience ? { audience: config.audience } : null),
    redirectUri: window.location.origin,
    onRedirectCallback,
  };


root.render(
    <React.StrictMode>
            <Auth0Provider {...providerConfig}>
                <ContextProvider>
                    <App />   
                </ContextProvider>
            </Auth0Provider>
    </React.StrictMode>
        );

