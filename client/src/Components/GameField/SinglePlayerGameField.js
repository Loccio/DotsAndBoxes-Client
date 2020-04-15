import GameField from "./GameField";

export default class SinglePlayerGameField extends GameField
{
    PAUSE = 150;
    constructor(props)
    {
        super(props);
    }

    clickLine (id){
        if(this.state.match.userInput)
        {
            var match = this.state.match;
            match.play(id);
            this.setState({match:match});
            if(this.state.match.isOver())this.props.onMatchEnd();
            if(this.state.match.currentTurn===1)
            this.setState({cpuPlayng:true});
            
        }
    }

    cpuPlay= ()=>{
        var match = this.state.match;
        if (match.currentTurn===0||match.isOver()) {
            this.setState({ cpuPlayng: false });
            return;
        }
        match.cpuPlay();
        this.setState({match:match}); 
        if(this.state.match.isOver())this.props.onMatchEnd();           
    }

    componentDidUpdate(prevProps)
    {
        if(prevProps.level!==this.props.level||prevProps.field!== this.props.field)
        {
            this.setState( {
                x:this.props.field.getWidth()-1,
                y:this.props.field.getHeight()-1,
                match: this.getNewMatchManager(this.props.field,this.props.level,this.props.user),
                cpuPlayng:false,
                currentlevel:this.props.level,
    
            });
        }
        else
        if(this.state.cpuPlayng)setTimeout(this.cpuPlay,this.PAUSE);
    }
}