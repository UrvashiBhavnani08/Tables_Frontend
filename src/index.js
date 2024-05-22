// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
import "./App.css";
import Card from "./components/Card";
import All_Projects_Card from "./components/all_projects_card";
import AdminCard from "./admin_card";
import { BrowserRouter } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Link, Route, Routes } from 'react-router-dom';
import {AuthContextProvider} from './context/AuthContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
      <App />

                 {/* <Routes>
        <Route
            path="/admincard"
            element={
              <>
              <div className="App"> 
    <Card/>

     </div> 
     <div>
              <All_Projects_Card/>
            </div>
             
                
              </>
            }
          ></Route>
        
     
          </Routes> */}
      
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
