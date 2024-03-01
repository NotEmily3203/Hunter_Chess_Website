import React from "react";
import ReactDOM from "react-dom";

import App from './App.js';
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
)