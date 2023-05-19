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
                <div className="container">
                  
                    <Routes> 
                          <Route path="/" element={<ListClientComponent />} />
                          <Route path = "/clients" element = {<ListClientComponent />}></Route>
                          <Route path = "/add-client/:id" element = {<CreateClientComponent />}></Route>
                          <Route path = "/view-client/:id" element = {<ViewClientComponent />}></Route>
                          {/* <Route path = "/update-client/:id" element = {<UpdateclientComponent />}></Route> */}
                    </Routes>
                </div>
              <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
