import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Select from 'react-select'

export default class Room extends Component {

constructor(props) {
    super(props);
    
    this.state={

        options:[
            {label:'AirCondition'},
            {label:'Lab'},
            {label:'Stereo'},
            {label:'boiler'},
        ],

      Room:[

      ],

      index:'',

      Products:'',
      

    }

}


    render() {
        return (
            <div>  

                Smart House <br/>

      Room: {this.props.name} <br/>
       RoomType :{this.props.type}
         <br/>
         
         
       <Link to="/"> Back To Lobby </Link>

            </div>
        )
    }
}
