import React from 'react';
import './App.css';
import Home from './Components/Home/Home.js';
import {BrowserRouter,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <div className="main">
    <Switch>
      
      <Route path ="/">
      <Home/>
      </Route>
    </Switch>
    </div>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
