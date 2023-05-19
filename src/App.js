import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import ListClientComponent from './components/ListClientComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateClientComponent from './components/CreateClientComponent';
import ViewClientComponent from './components/ViewClientComponent';



function App() {
  return (
    
    <div>

        	<Router>
		 
             	 <HeaderComponent />
 		             
                    <Routes> 
                          <Route path="/" element={<ListClientComponent />} />
                          <Route path = "/clients" element = {<ListClientComponent />} />
                          <Route path = "/add-client/:id" element = {<CreateClientComponent />} />
                          <Route path = "/view-client/:id" element = {<ViewClientComponent />} />
                          <Route path = "/edit-client/:id" element = {<CreateClientComponent />} />
                    </Routes>
              
              
        </Router>

    </div>
  );
}

export default App;
