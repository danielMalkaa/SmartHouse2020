import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Select from 'react-select'


export default class HomePage extends Component {
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
      }
      }
      
    check =(name,flag)=>{

        if(name == "" ){
        flag = 'none';
        }
    }

    
    render() {
        return (
            <div>


<div className='col-8'>
          <p style={{color:'#3a0799',
          paddingLeft:'200px'
          }}>
              Wellcome To SmartHouse Application - By DMalka LTD </p>
          <br/>
          <br/>

           <button  style={{backgroundColor:this.props.color,display:this.state.flag}}> 
        <Link to="/room"> {this.props.name}<br/>
        {this.props.type}<br/> </Link>
         </button><br/>


         <Link to="/addroom"> 
         <button 
          style={{
          position:'relative',
          backgroundColor:'blue',
          borderRadius:'15px',
          background:'linear-gradient(to bottom,  #2d1696 5%, #2fbd6a 100%)',
          outline:'0',
          width:'65px',
          marginLeft:'300px',
          marginTop:'70px'
          }}> 
          +
        </button>
         </Link>
        
           {this.check(this.props.name,this.props.flag)}
        </div>
                
            </div>
        )
    }
}
