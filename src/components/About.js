import React from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends React.Component {
  render(){
    return (
      <div>
      About Us
      <User/>
      <UserClass name={"Class component"} location={"New Jersey"}/>
    </div>
    )
  }
}


export default About
