import React, { Component } from "react";
class Winner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName1: "",
            userName2: "",
            message1: null,
            message2: null,
            message3: null,
            message4: null,
            message5: null,
            message6: null,
            message:null,
        };
    }
    getUserName1 = (e) => {
        this.setState({
            userName1: e.target.value,
        });
    };
    getUserName2 = (e) => {
        this.setState({
            userName2: e.target.value,
        });
    };
    validate1 = (props) => {
        fetch(`https://api.github.com/users/${this.state.userName1}`)
            .then((response) => response.json())
            .then((data) => {
                var result1 = data.followers_url.length;
                var result2 = data.following_url.length;
                var result3 = data.subscriptions_url.length;
                console.log(data.followers_url.length);

                return (this.setState({
                    message1: result1,
                    message2: result2,
                    message3: result3,
                }))
                
            })
            
            .catch((error) => error);
            
    }
    
    validate2 = (props) => {
        this.validate1();
        fetch(`https://api.github.com/users/${this.state.userName2}`)
            .then((response) => response.json())
            .then((data) => {
                var result4 = (data.followers_url.length);
                var result5 = (data.following_url.length);
                var result6 = (data.subscriptions_url.length);
                console.log(data.length);
                return (this.setState({
                    message4: result4,
                    message5: result5,
                    message6: result6,

                }))
            })
            .catch((error) => error);
    }
 
    validate = () => {
        this.validate1();
        
        this.validate2();
        var a = this.state.message1;
        var b = this.state.message2;
        var c = this.state.message3;
        var d = this.state.message4;
        var e = this.state.message5;
        var f = this.state.message6;
        if ((a>d&&b>e||c>f)||(a>d||b>e&&c>f)) {
            this.setState({
                message: `${this.state.userName1} is greater than ${this.state.userName2}`,
            })
        }
        else {
            this.setState({
                message: `${this.state.userName2} is greater than ${this.state.userName1}`,
            })
        }
        // console.log(a);
        // console.log(b);
    }
  
    render() {
        return (
            <div className="container" >
                <input type="text" id="userName1" style={{ margin: "10px" }} onChange={this.getUserName1} /><br />
                <input type="text" id="userName2" style={{ margin: "10px" }} onChange={this.getUserName2} />
                <button onClick={this.validate}>Validate</button>
                <p>{this.state.message1}</p>
                <p>{this.state.message2}</p>
                <p>{this.state.message3}</p>
                <p>{this.state.message4}</p>
                <p>{this.state.message5}</p>
                <p>{this.state.message6}</p>
                <p>{this.state.message}</p>
                
            </div>
        );
    }
}
export default Winner;