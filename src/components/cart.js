import React ,{Component} from 'react'; 
import cart from '../services/cart';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

 
 class Cart extends Component{
     state = {
         cartItems:[],
         total: 0
     }

     componentDidMount(){
         cart.getData()
         .then(localdata => {
            if(localdata !==null && localdata.length !== this.state.cartItems.length) {
                this.setState({cartItems: localdata})
            }else {
                this.setState({cartItems: []})
            }
         })
         .then(()=>{
             if(this.state.cartItems !== []){
                 return this.totalAll(this.state.cartItems)
             } else {
                 return 0 
             }
         })
         .then(total => {
            this.setState({ total: total });
        })
        //  let cart = localStorage.getItem('addedCartItems')
        //  cart = JSON.parse(cart)
        //  this.setState({cartItems:cart})
     }

     totalAll = (cartItems) => {
         return (cartItems.reduce((accumulator, current)=> {
             const sum = (accumulator + current.unitprice)
             return sum
         }, 0))
     }
   
     componentDidUpdate = () => {
         cart.getData()
         .then(localdata => {
             const cartInfo = localdata;
             if((localdata !==null) && (localdata.length !== this.state.cartItems.length)){
                 const total = this.totalAll(cartInfo)
                 this.setState({total: total, cartItems: cartInfo})
             }

         })
     }
     deleteItem = (i) => {
         const item = this.state.cartItems;
         const itemsNew = [...item]
         itemsNew.splice(i,1);
         cart.saveData('addedCartItems', (itemsNew))
         .then(()=>{
             this.setState({cartItems: itemsNew})
         })
         .then(()=>{
             return this.totalAll(this.state.cartItems)
         })
         .then(total =>{
             this.setState({total: total})
         })
     }
     render(){
         const { total } = this.state

         return (
             <React.Fragment>
            {
                this.state.cartItems.map((cartItems,i)=>{
                    return (
                        <React.Fragment>
                            <button style={{float: 'right', color: 'orange', marginTop: '5px'}} onClick={this.deleteItem}>X</button>
                            <img style={{borderRadius: '50%', width: '10%', height:'90px', marginTop: '5px'}} src={cartItems.imgurl.pic} alt=''></img>
                            <div className ='mt-3 mb-3'>{cartItems.productname}</div>
                            <p>{cartItems.categorydesc}</p>
                            <p>{cartItems.color}</p>
                            <strong>$ {cartItems.unitprice}</strong>
                            <hr></hr>  
                        </React.Fragment>
                    );
                    
                })
            } 
               <div style={{color: 'red'}}> Sum total $ {total}</div>
               <Link to='/Checkout'><Button>Proceed to Checkout</Button></Link>
               
            </React.Fragment>
         )
         
     }
 }

 export default Cart