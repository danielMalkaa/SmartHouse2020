import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage.js'
import NewRoom from './Components/NewRoom.js'
import './App.css'
import Room from './Components/Room.js';


export default class App extends Component {


  constructor(props) {
    super(props);
    

  this.state= {

    options:[
      {label:'Bedroom'},
      {label:'Kitchen'},
      {label:'Bathroom'}],
      flag:'unshow',
  name:'',
  color:'',
  type:'',
  Rooms:[{
      type:'',
      name:'',
      backgroundColor:''
  }],
  flag:'',
  index:'',

  Products:'',
  
  }
  }
  
  componentWillMount() {
    this.setState({name:this.state.Rooms.name,type:this.state.Rooms.type });
    
}

  

   
  insideRoom = (name,type,color,flag) => {  
    this.setState({name:name})
    this.setState({type:type})
    this.setState({color:color})
    this.setState({flag:flag})
    this.setState({Rooms:[{name:name,type:type,backgroundColor:color},...this.state.Rooms]})
  }
   

 render() {

    return (
      <div className="App-header">   
     <Router> 
      <Switch>
        <Route exact path="/" component={()=>{return  <HomePage 
         name={this.state.name} color={this.state.color}  
         type={this.state.type}  flag={this.state.flag}   />}}>
        </Route>
        <Route exact path="/addroom" component={()=>{return <NewRoom insideRoom={this.insideRoom}/>}}>
        </Route>
        <Route exact path="/room" component={()=>{return <Room name={this.state.name}
        type={this.state.type}
        />}}>
        </Route>
      </Switch>
     </Router>
      </div>
    )
  }
}  