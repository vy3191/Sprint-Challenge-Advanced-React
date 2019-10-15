import React from 'react'

function User(props) {
  if(!props.user) {
     return <p>Loading...</p>
  }
  return (
    <div >
      <div style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.9)', padding: '50x', width: '400px', }}>
         <h2 style={{padding: '15px 0px'}} >Name:{props.user.name}</h2>
         <h2 data-testid='country'>Country: {props.user.country}</h2>
         <h2 data-testid='search'>Searches:{props.user.searches}</h2>
         <p style={{textAlign: 'right', marginRight: '20px'}}> user Id: {props.user.id}</p>
      </div>
    </div>
  )
}

export default User
