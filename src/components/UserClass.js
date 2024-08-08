import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        count : 0,
        count2: 1
    }
  }
//   Notes: this.state is an object and this.setState is another object both are used to handle the state of the variable. 
// when state is changed it compared both object (find the difference and update the stae, reconcilation algo is used)
  render() {
  // destructure:
  const {name,location}= this.props;
  const {count,count2} = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button onClick={()=>{
            this.setState({
                count: this.state.count +1
            })
        }}>  Increase</button>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {this.props.location}</h3>
        <h3>Contact: @jjhd</h3>
      </div>
    );
  }
}

export default UserClass;
