import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Select from 'react-select'


export default class newName extends Component {
 

    constructor(props) {
        super(props);
        
    this.state = {
      
        options:[
            {label:'Bedroom'},
            {label:'Kitchen'},
            {label:'Bathroom'}],
            flag:'none',
        name:'',
        color:'',
        type:'',
        Rooms:[{
            type:'',
            name:'',
            backgroundColor:''
        }]  
    }
        
    }

     newName = (element) => {  
        this.setState({name:element.target.value});
       }

     newColor = (element) => {  
        this.setState({color:element.target.value});
       }
 
       newType = (element) => {  
        this.setState({type:element.label});
       }

       componentWillMount() {
        this.setState({name:this.state.Rooms.name,type:this.state.Rooms.type,backgroundColor:this.state.Rooms.backgroundColor });
    }

       newRoom = (name,type,color) => {  
        this.setState({Rooms:[{name:name,type:type,backgroundColor:color},...this.state.Rooms]})
        this.setState({flag:'block'})
        
        if(name.length > 5 || type == ''){
            alert('Error');
            
        } 
       }
    
       
       Add = () => {  
        this.newRoom(this.state.name,this.state.type,this.state.color);
        // document.querySelector('inputName').style.display = 'none';
        // document.querySelector('inputColor').style.display = 'none';
        // document.querySelector('CreateBtn').style.display = 'none';
    }

    AddToRooms = () => {  
        this.props.insideRoom(this.state.name,this.state.type,this.state.color,this.state.flag)
        
    }
    
    
    block = () => {

        if (this.state.flag == 'none') {
          return (
            <div>
             <p style={{marginLeft:'250px'}}> SmartHouse </p>
            <div id="root" style={{marginTop:'1px'}}>
            <p style={{marginLeft:'160px',marginBottom:'80px'}} >
                <Select className="mt-4 col-md-8 col-offset-4" options={this.state.options}
                onChange={this.newType}
                /></p>
        
            
                <input className="inputName" placeholder="Room Name" type="text"
                style=
                {{marginLeft:'30px',
                 outline:'0',bottom:'200px',width:'300px',
                 borderRadius:'10px'}}
                 onChange={this.newName} />
            
                <input className="inputColor" type="color" id="favcolor" name="favcolor"  
                style=
                {{marginLeft:'30px',marginTop:'5px',outline:'0',
                width:'300px',borderRadius:'10px'}} 
                onChange={this.newColor}
                
                /><br/>
               <button 
               onClick={this.Add} className="CreateBtn"
               type="button" class="btn btn-info" 
               style={{marginLeft:'310px',marginTop:'30px',outline:'0',borderRadius:'10px'}}>
                Create</button>
               
                </div>
             
                        </div>
                    ) 
        }
        else {
          return (
            <div>
             <p style={{marginLeft:'250px'}}> SmartHouse </p>
            <div id="root" style={{marginTop:'1px'}}>
            <p style={{marginLeft:'160px',marginBottom:'80px'}} >
                <Select className="mt-4 col-md-8 col-offset-4" options={this.state.options}
                onChange={this.newType}
                /></p>
            
            <p>{this.state.Rooms.map((element)=>{
                            return <Link to="/" > <button onClick={this.AddToRooms}
                            style={{width:'120px',height:'90px',backgroundColor:element.backgroundColor}}>
                                Room:{element.name} {element.type}</button></Link>
                 })}</p>

                <input className="inputName" placeholder="Room Name" type="text" 
                style=
                {{marginLeft:'30px',
                 outline:'0',bottom:'200px',width:'300px',
                 borderRadius:'10px'}}
                 onChange={this.newName} />
            
                <input className="inputColor" type="color" id="favcolor" name="favcolor"
                style=
                {{marginLeft:'30px',marginTop:'5px',outline:'0',
                width:'300px',borderRadius:'10px'}} 
                onChange={this.newColor}
                
                /><br/>
               <button 
               onClick={this.Add}
               className="CreateBtn"
               type="button" class="btn btn-info" 
               style={{marginLeft:'310px',marginTop:'30px',outline:'0',borderRadius:'10px'}}>
                Create</button>
               
                </div>
            
                            
                        </div>
                    
          )
        }
      }





    render() {

        return (
            <div>

          {this.block()}
                
            </div>
        )
    }
}
