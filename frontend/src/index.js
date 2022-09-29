import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Diseases from "./routes/Diseases";
import Symptoms from "./routes/Symtoms";
import RiskFactors from "./routes/RiskFactors";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                  <Route path="" element={<Diseases />}/>
                  <Route path="/diseases" element={<Diseases />}/>
                  <Route path="/symptoms" element={<Symptoms />}/>
                  <Route path="/risk-factors" element={<RiskFactors />}/>
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
