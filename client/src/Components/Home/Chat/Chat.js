import React,{Component} from 'react'
import Octicon, {Comment} from '@primer/octicons-react'
import './Chat.css'
import Message from './Message/Message'

class ChatMessage
{
    constructor(user,text)
    {
        this.user = user;
        this.text = text;
    }
}


export default class Chat extends Component
{
    constructor(props)
    {
        super(props);
        this.state =  {
            room:this.props.room,
            user:this.props.user,
            messages: [],
            socket:this.props.socket,
        };
    }

    componentDidMount()
    {
        this.state.socket.on('message',(message)=>
        {
            this.printMessage(message)
        })
    }

    componentDidUpdate()
    {
        document.getElementById("message-board").scrollTop = document.getElementById("message-board").scrollHeight;  
    }

    sendMessage(text)
    {
        if(text===''||!text) return;
        var msg = new ChatMessage(this.state.user,text);
        this.state.socket.emit('message',msg);
    }

    printMessage(message)
    {
        var msgs = this.state.messages;
        msgs.push(message);
        this.setState({
            messages:msgs
        });
    }


    render()
    {
        return <div className="pop chat padding-10">

        <div className="pop-header wide">
    <span ><Octicon className="pop-header-icon" icon={Comment}></Octicon>CHAT</span>
           
        </div>
        <div className="message-board" id='message-board'>
            {
                this.state.messages.map(
                    (message)=>
                    {
                        return <Message user={message.user} text={message.text} owned={message.user===this.state.user} key={this.state.messages.indexOf(message)}></Message>
                    }
                )
            }
        </div>
        <div className='input-board'>
            <input className='text-input' type='text' id='message-text'
             onKeyDown = {(e)=>{
                 if(e.keyCode === 13)
                 {
                      
                     this.sendMessage(document.getElementById('message-text').value); 
                      document.getElementById('message-text').value = ''; 
                    }
                }
            }  
            ></input>
        </div>

        </div>;
    }
}