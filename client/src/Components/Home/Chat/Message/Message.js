import './Message.css'
import React from 'react'

export default class Message extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            text: props.text,
            user: props.user,
            owned:props.owned,
        }

    }

    render()
    {
        if(this.state.user)
        {
            if(this.state.owned)
            return <div className='msg'>
              
              <p className='msg-text toright'>
              <span className='msg-user'>{this.state.user}</span><br></br>
                  {this.state.text}
                  </p>
            </div> 
            else return <div className='msg'>
            <p className='msg-text toleft'>
            <span className='msg-user'>{this.state.user}</span><br></br>
                {this.state.text}
                </p>
          </div> 
        }
        else 
        return <div className='msg'><div className='server-msg'>
            <p className='msg-text'>{this.state.text}</p>
        </div></div>
    }
}