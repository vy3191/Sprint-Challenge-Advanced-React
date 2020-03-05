import React, { Component } from 'react';
import User from './User';
import { isArray } from 'util';


export default class Users extends Component {
  constructor(props) {
     super(props);
     this.state= {
        data:[]
     }
  }
  componentDidMount() {
     this.setState({
        data: this.props.users
     })
  }
  render() {
     const data = this.state.data;
     console.log(data);
     if(data.length === 0) {
         return <h1>Loading...</h1>;
     }
     
    return (
      <div style={{display:'flex', flexWrap:'wrap'}}>
        { 
         Array.isArray(data) && data.map( (user,index) => (<User user={user} key={index} />)
        )}
      </div>
    )
  }
}
