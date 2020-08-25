import React, { Component } from "react";
class Followers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName1: "",
            userName2: "",
            message: "",
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
    validate = () => {
        fetch(`https://api.github.com/users/${this.state.userName1}/followers`)
            .then((response) => response.json())
            .then((data) => {
                data.filter((item) => item.login === this.state.userName2).length > 0
                    ? this.setState({
                        message: `${this.state.userName2} is following ${this.state.userName1}`,
                    })
                    : this.setState({
                        message: `${this.state.userName2} is not following ${this.state.userName1}`,
                    })
            })
            .catch((error) => error);
    }
    render() {
        return (
            <div className="container" >
                <input type="text" id="userName1" style={{ margin: "10px" }} onChange={this.getUserName1} /><br />
                <input type="text" id="userName2" style={{ margin: "10px" }} onChange={this.getUserName2} />
                <button onClick={this.validate}>Validate</button>
        <p>{this.state.message}</p>
            </div>
        );
    }
}
export default Followers;