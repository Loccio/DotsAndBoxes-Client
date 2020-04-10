import React, {Component} from 'react';
import './Home.css';
import Nav from '../Nav/Nav.js';
import MatchCPU from './MatchCPU/MatchCPU'
import Room from './Room/Room'
import Octicon, {Rocket as Play} from '@primer/octicons-react'

import {Switch,Route, withRouter} from "react-router-dom";

class Home extends Component
{
    
    constructor(props)
    {
        super(props);
        this.state = {
            username:'',
            room:'',
            message: '',
            level:'medium',
        };
    }

    hiServer = () =>
    {
        fetch('/api/hi').then(res =>res.json()).then(json=>this.setState({message:json.message}, ()=>console.log(json.message)));   
    }

    userChange = (e) =>
    {
        this.setState(
            {
                username:e.target.value
            }
        )
    }

    roomChange = (e) =>
    {
        this.setState(
            {
                room:e.target.value
            }
        ) 
    }

    handleSubmit(value)
    {
        if(value==='online')
        {
            var room = this.checkRoom()
            var user = this.checkUser()
            if(room&&user)
            {
                this.props.history.push("/online");
            }
  
        }
        else
        {
            if(this.checkUser())
            {
               this.props.history.push("/offline")
            }
        }
    }


    checkRoom()
    {
        if(this.state.room==='')
        {
            document.getElementById('room').classList.add('error');
            setTimeout(function() {
                document.getElementById('room').classList.remove('error');
              }, 
            400);
            return false;
        }
        else
        return true;
    }
    checkUser()
    {
        if(this.state.username==='')
        {
            document.getElementById('user').classList.add('error');
            setTimeout(function() {
                document.getElementById('user').classList.remove('error');
              }, 
            400);
            return false;
        }
        else
        return true;
    }

    render()
    {
        return(
        <div className="wrapper bg-main">
        
            <Nav page='Dots and Boxes'/>
            
            <div className="content">
            
                
            
            
               
            <Switch>
             <Route path="/offline">
             <div className="pop gamespace" id="gamespace">
                <MatchCPU level={this.state.level} username={this.state.username}/></div>
             </Route>
             <Route path="/online">
                 <Room user={this.state.username} room ={this.state.room}></Room>
             </Route>
        
             <Route path="/" >
             <div className="pop gamespace" id="gamespace">
                <div className="wide padding-10">
                <div className="pop-header" ><span><Octicon className="pop-header-icon" icon={Play}></Octicon>MATCHMAKING</span> 
                </div>
                <div className="flex-column" id="matchmaking">
                <span>username</span>
                <input type="text" onChange={this.userChange} id="user" value={this.state.username}  autoComplete="off"></input>
                <span>room</span>
                <input type="text" onChange={this.roomChange} id='room' value={this.state.room}  autoComplete="off"></input>
                <button className="btn" onClick={()=>this.handleSubmit('online')}>Join Room</button>
                <button className="btn btn-blue" onClick={()=>this.handleSubmit('offline')} >Play Offline</button>
                </div>
                </div>
                </div>
             </Route>
             
            </Switch> 
            
            

            
            </div>
       
        </div>
    )
    }
}

  
    

   

export default withRouter(Home);