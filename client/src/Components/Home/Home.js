import React, {Component} from 'react';
import './Home.css';
import Nav from '../Nav/Nav.js';
import MatchCPU from './MatchCPU/MatchCPU'
import Stats from './Stats/Stats'
import Friends from './Friends/Friends'
import Octicon, {Rocket} from '@primer/octicons-react'

import {BrowserRouter,Switch,Route,Link} from "react-router-dom";

class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            message: '',
            level:'medium',
            x:7,
            y:7,
        };
    }

    hiServer = () =>
    {
        fetch('/api/hi').then(res =>res.json()).then(json=>this.setState({message:json.message}, ()=>console.log(json.message)));   
    }
    render()
    {
        return(
        <div className="wrapper bg-main">
        <BrowserRouter>
            <Nav page='Home'/>
            <div className="content">
                <div className="pop gamespace" id="gamespace">
            <Switch>
             <Route path="/match">
                <MatchCPU level={this.state.level} x={this.state.x} y={this.state.y} />
             </Route>

             <Route path="/pvpmatch">
                <MatchCPU level= 'online' x={this.state.x} y={this.state.y}/>
             </Route>
        
             <Route path="/" >
                <div className="wide padding-10">
                <div className="pop-header"> <Octicon className="pop-header-icon" icon={Rocket}></Octicon>GAMEMODE SELECTION</div>
                <div className="flex-column">
                    <br/>
                <strong><strong><strong><b>DOTS</b></strong> AND <strong><b>BOXES</b></strong></strong> </strong>
                <br/>
                <Link to="/pvpmatch">
                <button className="btn">Find an Opponent</button>
                </Link>

                <Link to="/match">
                <button className="btn btn-blue"  >Play Offline</button>
                </Link>
                
                </div>
                </div>


             </Route>
             
            </Switch>
            </div>

            <div className="secondary">
            <Stats></Stats>
            <Friends></Friends>
            </div>
            </div>
        </BrowserRouter>
        </div>
    )
    }
}

  
    

   

export default Home;