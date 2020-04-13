import React, {Component} from 'react'
import './ServerConnection.css'
import Octicon, {Server, Alert} from '@primer/octicons-react'
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
            <div className={this.state.connection?'online':'offline'}>
                <Octicon icon={Server}/> 
                {this.state.connection? null : <Octicon className='alert-icon' icon={Alert}></Octicon>}
        </div> 
            <span className="tooltiptext">{this.state.connection?'Server online!':'Server offline!'}
            </span>
        </div> 
       
    }

}