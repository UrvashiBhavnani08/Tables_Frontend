import "./App.css";
import React, {useState} from 'react';
import Card from "./components/Card";
import All_Projects_Card from "./components/all_projects_card";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
function admin_card() {

  return (
    <div>
   
  
       <div>
   
       <div className="App"> 
    <Card/>

     </div> 
     <div>
              <All_Projects_Card/>
            </div>
          
    
   
    </div>
          
    
   
    </div>
  );
}

export default admin_card;