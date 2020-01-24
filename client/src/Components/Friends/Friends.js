import React,{Component} from 'react'
import Nav from '../Nav/Nav'

export default class Friends extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            props:props
        }
    }

    render()
    {
        return <>
        <Nav page='Friends'></Nav>
        </>;
    }
}