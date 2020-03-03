import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Room extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Display:'none',
            Products:[]
        }
    }

    validSelect = (element)=>{
        this.setState({...this.state,selectProduct:element.target.value});
         
    }
    

    addItem = () =>{
        this.setState({...this.state,Display:'inline',Display2:'none'});
    }


    styleBtn = () =>{
        if(this.state.Display == 'none'){
            this.setState({...this.state,Display2:'inline'})
        } else if(this.state.Display == 'inline'){
            this.setState({...this.state,Display2:'none'})
        }
    }


    add = () => {
        this.setState({Products:this.state.Products,Display:'none',Display2:'inline'});
    }

    
    componentDidMount(){
        this.setState({AddRoomS:this.props.AddRoomS})
    }

    render() {
        return (
            <div className='App'>
                                    {this.state.Products}

                <h5> {this.props.AddRoomS[0].RoomName} </h5>
               <h5> {this.props.AddRoomS[0].RoomKind} </h5>

                    <button onClick={()=>{
                        this.state.Products= 'topppp'
                    }}></button> 
               <br></br>

               <h4>Products:</h4>
               <br></br>
               <h5> {this.state.Products.map((element,i)=>{
                   return <div>
                      <p>{i+1} {this.state.Products[i]}</p>
                   </div>
               })}</h5>

                <button style={{display:this.state.Display2}} onClick={this.addItem} >add item</button>
                <Link to ="/HomePage"><button style={{display:this.state.Display,outline:'0'}}  onClick={this.add} >add </button> </Link>
                <select onChange={this.validSelect} style={{display:this.state.Display}}>

                    <option> Stereo </option>
                    <option> Boiler </option>
                    <option> Air </option>
                    <option> Lab </option>

                </select>
                <br/>
                <br/>
                <h5> {this.props.AddRoomS[0].Products} </h5>

            </div>
        )
    }
}