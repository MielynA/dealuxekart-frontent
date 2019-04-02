import React from 'react';
import firebase from '../firebase';


export default class Logout extends React.Component {

  componentDidMount() {
    firebase.auth().signOut()
  }

  render() {
    return (
      
        <React.Fragment>
        <div className = 'jumbotron jumbotron-fluid'>
        <div className = 'container'>
        
        <h2 className='display-4 text-center'>Thank you! come back for more promo deals, Successfully Logged out</h2>
        </div>
        </div>
       
        </React.Fragment>
     
    );
  }
}