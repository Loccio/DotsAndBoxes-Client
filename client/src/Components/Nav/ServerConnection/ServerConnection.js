import React, {Component} from 'react'
import './ServerConnection.css'
import Octicon, {Server} from '@primer/octicons-react'
export default class ServerConnection extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            connection: false
        }
    }

    componentDidMount()
    {
        this.checkConnection();
    }

    checkConnection()
    {
        fetch('/api/online').then(
            res => res.json()
        ).then(
            json => this.setState({connection: json.response})
        )
    }

    render()
    {
        return <div className="tooltip">
            <div className={this.state.connection?'online':'offline'}><Octicon icon={Server}/>
        </div> 
            <span className="tooltiptext">{this.state.connection?'Server connected!':'Server disconnected!'}
            </span>
        </div> 
       
    }

}