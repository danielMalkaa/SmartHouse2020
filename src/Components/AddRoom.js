
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Room from './Room'

export default class AddRoom extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
            RoomName:'',
            RoomColor:'',
            RoomKind:''
        }
    }

    validRoomName = (element)=>{
        this.setState({RoomName:element.target.value});            
    }

    validRoomColor = (element)=>{
        this.setState({RoomColor:element.target.value});
    }

    validRoomKind = (element)=>{
        this.setState({RoomKind:element.target.value});
    }

    add = () => {

        this.props.create(this.state.RoomName,this.state.RoomKind, this.state.RoomColor);
        
    }
    

    render() {
        return (
            <div className='App'>

                <select onChange={this.validRoomKind}>
                    <option>select room</option>
                    <option>BadRoom</option>
                    <option>BathRoom</option>
                    <option>Kcichen</option>
                </select>
                <br/>
                <input onChange={this.validRoomName} placeholder='Room Name'></input>
                <br/>
                <input onChange={this.validRoomColor} placeholder='Room Color'></input>
                <Link to='/HomePage'><button onClick={this.add}>Create</button></Link>


            </div>
        )
    }
}
