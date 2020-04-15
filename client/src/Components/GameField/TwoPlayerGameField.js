import GameField from "./GameField";

export default class SinglePlayerGameField extends GameField
{
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
        }
    }

    componentDidUpdate(prevProps)
    {
        if(prevProps.field!== this.props.field)
        {
            this.setState( {
                x:this.props.field.getWidth()-1,
                y:this.props.field.getHeight()-1,
                match: this.getNewMatchManager(this.props.field,this.props.level,this.props.user),
            });
        }
    }
}