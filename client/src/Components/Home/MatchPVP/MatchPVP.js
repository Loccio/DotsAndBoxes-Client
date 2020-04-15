import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Octicon,{X,Play,Zap,Check} from '@primer/octicons-react';
import OnlineGameField from '../../GameField/OnlineGameField'
import Field from '../../../Game/Field';
class MatchPVP extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            room:this.props.room,
            socket:this.props.socket,
            user: this.props.user,
            level:'online',
            x:7,
            y:7,
            field : new Field(8,8)
        }
    }

    componentDidMount()
    {
        this.state.socket.on('secondplayer',name=>this.setState({secondplayer:name}));
        this.state.socket.on('secondplayerout',()=>{
            this.setState({secondplayer:undefined})
            this.onRestart()
        }
        );
        this.state.socket.on('playagain',()=>{
            if(this.state.reqsent)this.onRestart()
            else
            this.setState({
                reqrec:true
            });
        });
           
    }

    onRestart()
    {
       this.setState({
            field: new Field(this.state.y+1,this.state.x+1),
            over:false,
            reqsent:false,
            reqrec:false,
        });
    }

    onRematchReq()
    {
        if(this.state.reqrec)
        {
            this.state.socket.emit('playagain');
            this.state.socket.emit('reqaccepted');
            this.onRestart();
        }
        else
        {
        this.setState({reqsent:true});
        this.state.socket.emit('playagain');
        }
    }

    onMatchEnd=() =>{
        this.setState(
            {over:true}
        )
    }

    
    render()
    {
        return(
            <div className="wide">
            <div className="pop-header" ><span><Octicon className="pop-header-icon" icon={Play}></Octicon>ROOM: {this.state.room}</span> 
            <Link className="mlaut" to="/matchmaking"><Octicon className="quit" icon={X}></Octicon></Link>
            </div>
            <div className='wide'>
            {this.state.over&&this.state.secondplayer?
        <div className='restart'>
            <div className='flex-column restart-form'>
               
                {this.state.reqrec?<> <p>
                    Your opponent asked for a rematch, you can accept the request or leave the game!
                </p><div className='flex-row'><Octicon className="btn-icon btn-icon-green" icon={Check}></Octicon>
                <a className='btn-iconed btn-iconed-green' onClick={()=>this.onRematchReq()}>Accept Request</a></div>
                <div className='flex-row'><Octicon className="btn-icon btn-icon-red" icon={X}></Octicon>
                <Link className='btn-iconed btn-iconed-red' to='/'>Leave the game</Link></div>
                </>
                :this.state.reqsent?<p>
                    A rematch request has been sent. Waiting for your opponent to accept...
                </p>:<><div className='flex-row'>
                <Octicon className="btn-icon" icon={Zap}></Octicon>
                <a className='btn-iconed' onClick={()=>this.onRematchReq()}>Rematch</a></div></>}
                
        </div>
        </div>:null} 
 
          <div className="flex-column fit-content">
              {this.state.secondplayer?
               <OnlineGameField field={this.state.field} level={this.state.level} user={this.state.user} socket={this.state.socket} secondplayer={this.state.secondplayer} onMatchEnd={this.onMatchEnd}></OnlineGameField>:
               <p>You are alone in this room!<br></br>
               wait for a second player to start a new game...
               </p>
            }
          </div>
          
          </div>
           </div>
    )
    }
}

export default MatchPVP;