import GameField from "./GameField";

export default class OnlineGameField extends GameField
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        var match = this.state.match;
           match.changeTurn();
           this.setState({match:match});

        this.state.socket.on('startgame',()=>{
           var match = this.state.match;
           match.changeTurn();
           this.setState({match:match});
        });

        this.state.socket.on('drawline',(id)=>{
            var match = this.state.match;
                match.play(id);
                this.setState({match:match});
                if(this.state.match.isOver())this.props.onMatchEnd();
        });
    
    }

    componentDidUpdate(prevProps)
    {
        if(prevProps.field!== this.props.field)
        {
            var match = this.getNewMatchManager(this.props.field,this.props.level,this.props.user,this.props.secondplayer);
            match.changeTurn();
            this.setState( {
                socket:this.props.socket,
                user:this.props.user,
                x:this.props.field.getWidth()-1,
                y:this.props.field.getHeight()-1,
                match: match,
                cpuPlayng:false,
                currentlevel: this.props.level,
                secondplayer:this.props.secondplayer,
            });
 
        }
    }

    clickLine (id){
        if(this.state.match.currentTurn===0&&this.state.match.userInput)
            {
                var match = this.state.match;
                match.play(id);
                this.state.socket.emit('drawline',id);
                this.setState({match:match});
                if(this.state.match.isOver())this.props.onMatchEnd();
            }
    }
}