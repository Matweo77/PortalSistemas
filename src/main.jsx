import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "./context/msalConfig.js";
import ErrorBoundary from "./components/error/ErrorBoundary.jsx";

import App from './app/App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary> 
      <BrowserRouter>
        <MsalProvider instance={msalInstance}>
          <App />
        </MsalProvider>
      </BrowserRouter>
     </ErrorBoundary>
  </React.StrictMode>,
)