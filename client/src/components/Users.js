import React, { Component } from 'react';
import {useLocalStorage} from '../utils/Input';
import User from './User';


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
     
    return (
      <div style={{display:'flex', flexWrap:'wrap'}}>
        {this.state.data.map( (user,index) => (<User user={user} key={index} />)
        )}
      </div>
    )
  }
}
