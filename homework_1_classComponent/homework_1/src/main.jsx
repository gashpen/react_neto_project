import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const contentApp = new App();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <contentApp.showApp />
  </React.StrictMode>,
)
