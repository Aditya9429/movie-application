import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalState from './Context/GlobalState.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='618830850206-qqdhrm562f01v4skl3t6vmul0s0lj8hm.apps.googleusercontent.com'>

  <GlobalState>
    <App />
  </GlobalState>
  </GoogleOAuthProvider>

)
