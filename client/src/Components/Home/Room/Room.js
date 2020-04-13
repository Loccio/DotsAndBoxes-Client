import React, {Component} from 'react';
import MatchPVP from '../MatchPVP/MatchPVP'
import Chat from '../Chat/Chat.js'
import { Redirect,Link } from 'react-router-dom';
import socketIOClient from "socket.io-client";
import Loading from '../Loading'
export default class Room extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            room:this.props.room,
            username:this.props.user,
            socket:socketIOClient(),
            joined:null,
        }
        
    }

    componentDidMount()
    {
        this.state.socket.emit('joinRoom', {
            username:this.state.username,
            room:this.state.room
        })

        this.state.socket.on('join',(result)=>this.setState({joined:result})
        )

        this.state.socket.on('disconnect',()=>this.setState({disconnected:true}))
    }

    componentWillUnmount()
    {
        this.state.socket.close();
    }


 
    render()
    {

        if(this.state.disconnected)
        {
            return <div>
                You have been disconnected from the room {this.state.room}. <br>
                </br>
                Please <Link className='link' to='/'>go back</Link> to the homepage.
            </div>
        }

        if(!this.state.username||!this.state.username) 
        return <Redirect to ='/'></Redirect>

        else if(this.state.joined!==null)
        {
        if(this.state.joined===true) 
        return<> <div className="pop gamespace" id="gamespace">
        <MatchPVP user={this.state.username} room={this.state.room} socket={this.state.socket}></MatchPVP>
        </div> 
        <Chat user={this.state.username} room={this.state.room} socket={this.state.socket}></Chat></>
       else return <div>THE ROOM IS FULL</div>
    }
        else return <Loading></Loading>
    }
}