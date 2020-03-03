
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }



    del = () => {
        this.props.del(this.props.index);
    }

    onClickRoom = () =>{
        this.props.onClickRoom(this.props.index,this.props.RoomName,this.props.RoomKind,this.props.RoomColor,this.props.Products)
    }

    render() {
        return (

            <div className='App'>
                
            <Link to='/Room'><button onClick={this.onClickRoom} style={{backgroundColor:this.props.RoomColor}}>
                {this.props.RoomName}{this.props.RoomKind}</button></Link>

                <button onClick={this.del}>del</button>
               
            </div>
        )
    }
}


{/* {this.props.AddRoomS.map((element, i) => {

                    return <div>
                    
                        <Link to='/Room'><button onClick={() => {
                            this.props.onClickRoom(element.RoomName, element.RoomKind, element.RoomColor)
                        }} style={{ backgroundColor: element.RoomColor }}>{i + 1} : {element.RoomName}{element.RoomKind}</button></Link>

                    </div>
                })}
                                        <button onClick={this.del}>del</button> */}