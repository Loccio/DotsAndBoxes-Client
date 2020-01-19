import React, {Component} from 'react';
import './Home.css';
import Nav from '../Nav/Nav.js';
import MatchCPU from '../MatchCPU/MatchCPU'
import Stats from '../Stats/Stats'
import Friends from '../Friends/Friends'
import Octicon, {Rocket,Tools,ChevronDown} from '@primer/octicons-react'
import Collapse from '../../Utils/collapse';

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
            y:7
        };
    }

    hiServer = () =>
    {
        fetch('/api/hi').then(res =>res.json()).then(json=>this.setState({message:json.message}, ()=>console.log(json.message)));   
    }

    onLevelChange = (e)=>this.setState({level:e.currentTarget.value})

    onHeightChange = (e)=>this.setState({y:e.currentTarget.value})
    onWidthChange = (e)=>this.setState({x:e.currentTarget.value})

    render()
    {
        return(
        <div className="wrapper bg-main">
        <BrowserRouter>
            <Nav/>
            <div className="content">
                <div className="pop gamespace" id="gamespace">
            <Switch>
             <Route path="/match">
                <MatchCPU level={this.state.level} x={this.state.x} y={this.state.y} />
             </Route>

             <Route path="/pvpmatch">
                <MatchCPU level= 'online' x={this.state.x} y={this.state.y}/>
             </Route>
        
             <Route path="/">
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
                
                   <div className="gamemode collapse-button" onClick={()=>Collapse.collapse('level')}><b><Octicon icon={Tools}></Octicon> settings <Octicon icon={ChevronDown}></Octicon></b>
                   </div>
                   <div className="collapse"  id="level">
                   <input type="radio" name="level" value="dummy" checked={this.state.level === 'dummy'} onChange = {this.onLevelChange}/>CPU Dummy&nbsp;&nbsp;
                   <br></br>
                   <input type="radio" name="level" value="medium" checked={this.state.level === 'medium'} onChange = {this.onLevelChange}/> CPU Medium&nbsp;&nbsp;
                   <br></br>
                   <input type="radio" name="level" value="impossible" checked={this.state.level === 'impossible'} onChange = {this.onLevelChange}/>CPU Impossible&nbsp;&nbsp;
                   <br></br>
                   <input type="radio" name="level" value="1vs1" checked={this.state.level === '1vs1'} onChange = {this.onLevelChange}/>Play with a friend&nbsp;&nbsp;
                   </div>
                
                
              


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