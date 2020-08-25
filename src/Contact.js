
import React from 'react';
import "./App.css";

const Contact = (props) => {
   
    return (

        <div className="Contact">
        <h1>{props.address}</h1>
        <h1>{props.pin}</h1>
       
      </div>

    )
}
export default Contact;