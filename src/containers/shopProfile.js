import React from 'react'; 
import axios from 'axios'; 



export default class ShopProfile extends React.Component {
   constructor(props){
       super(props)
       this.state = {
         customerid: null,
         username: '',
         password: '',
         shopname: '',
         phone: null, 
         email: '',
         add: '',
         country: '',
         createdAt: Date.now(),
         updatedAt: Date.now()
       }
   }
//  componentDidMount = () => {
//      axios.get(`http://localhost:5001/supplier/${this.props.match.params.id}`)
//      .then((shopProfile)=>{
//          this.setState({
//             customerid: this.props.match.params.customerId,
//             username: this.props.match.params.userName,
//             password: ,
//             shopname: '',
//             phone: null, 
//             email: '',
//             add: '',
//             country: '',
//             createdAt: Date.now(),
//             updatedAt: Date.now()
//          })
//      })
//  }
  render(){
      return(
          <div className = 'container'>
           <p>This is shop profile</p>
          
          </div>
      );
  }
}