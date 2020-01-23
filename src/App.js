import React from 'react';
import './App.css';
import Home from './Components/Home/Home.js';
import Friends from './Components/Friends/Friends';
import Stats from './Components/Stats/Stats';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Tab from './Components/Tab/Tab';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Tab></Tab>
    <div className="main">
    <Switch>
     
      <Route path ="/friends">
        <Friends/>
      </Route>
      <Route path ="/stats">
      <Stats/>
      </Route>
      
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
