import React, { Component } from 'react';
import Contact from './Contact.js'
import List from './List.js'

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            data:"",
            name:"",
            stuName:"",
            students:["Harshith","neelam","ranjani","abudullah"],
            employees:["A","B","c"]
        };
    }
    captureName =(e)=>{
       this.setState({
           stuName:e.target.value,
       });
   };
   addStudent=()=>{
       let tempData = this.state.students;
       tempData.push(this.state.stuName);
       this.setState({
           students:tempData
       })
   }
    render(){
       return (
           <div>
               <label>Enter the student name: </label>
               <input type="text" onChange={this.captureName}/>
               <button onClick={this.addStudent}>Add Student</button>
               <List data={this.state.students} />
               <List data={this.state.employees} />

               {/* <input type="text" onChange={this.onChang}/>
             <h3>{this.state.data}</h3>
           <h1> {this.props.nam}</h1>
           <Contact address={'abcd'} pin={12345}/>
           <Contact address={'hyderabad'} pin={4567}/>
           <Contact address={'pune'} pin={67894}/> */}


           </div>

       )

    }

}

export default Home;