import React, {Component} from 'react';
//import MatchPVP from '../MatchPVP/MatchPVP'
import Chat from '../Chat/Chat.js'
import { Redirect } from 'react-router-dom';

export default class Room extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            room:this.props.room,
            username:this.props.user,
        }
        
    }

 
    render()
    {
        if(!this.state.username||!this.state.username) return <Redirect to ='/'></Redirect>
        return<> {/*<div className="pop gamespace" id="gamespace">
        <MatchPVP user={this.state.username}></MatchPVP>
    </div>*/}
        <Chat user={this.state.username} room={this.state.room}></Chat></>
        
    }
}