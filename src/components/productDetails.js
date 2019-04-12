import React from 'react'; 
import { Modal, ModalHeader, Button, ModalBody, ModalFooter, Spinner} from 'reactstrap';
import ViewDetails from './viewDetails';
import Storage from '../services/cart';

export default class ProductDetail extends React.Component {
     constructor(props){
       super(props);
       this.state = {
           view: [],
           modal: false, 
       }
       
     }

    handleToggle = ()=> {
        // this.state({modal: true})
         this.setState(prevState =>({
            modal: !prevState.modal
         }))
    }

  componentDidUpdate = () => {
    Storage.getViewItems('view')
    .then((localData) => {
      let hasAdded = false
      if (localData) {
        for (let i = 0; i < localData.length; i++) {
            console.log('this is local id', localData[i].id)
            console.log('this is props of product info', this.props)
          if (localData[i].prductId === this.props.productInfo.prductId) {
            hasAdded = true
            return localData
          }
        }
      }
      if (hasAdded === false && localData !== null) {
        const updatedViewed = localData
        updatedViewed.push(this.props.productInfo)
        return updatedViewed
      }
      if (localData === null) {
        const newViewed = []
        newViewed.push(this.props.productInfo)
        return newViewed
      }
    })
    .then((viewed) => {
      Storage.saveData('view', viewed)
    })
  }

render(){
     // console.log('products details' ,this.props.productInfo)
      if(this.props.productInfo){
          console.log('render product info', this.props.productInfo)
        return (  
            <React.Fragment>
            <Button style={{marginLeft: '20px'}} onClick={this.handleToggle}>see more</Button>
            <Modal isOpen={this.state.modal} toggle={this.handleToggle}>
            <ModalHeader toggle={this.handleToggle}>Here's one of our Best Seller Products</ModalHeader>
            <ModalBody>
            <div className = 'text-center'>
            <div>{this.props.productInfo.prductName} </div>
            <img src={this.props.productInfo.imgUrl} style={{borderRadius: '50%', width: '15%', height:'90px'}} alt=''></img>
            <div>Description: {this.props.productInfo.categoryDesc}</div>
            <div>Color: {this.props.productInfo.color}</div>
            <div style={{color: 'red'}}> Price: $ {this.props.productInfo.unitPrice}</div>
            </div>
           <ViewDetails product={this.props.productInfo} onClick={this.state.view}></ViewDetails>
         </ModalBody>
         <ModalFooter>
           <Button onClick={this.handleCheckout}>Add to Cart</Button>
           <Button onClick={this.handleToggle}>Close</Button>
         </ModalFooter>
       </Modal>
           </React.Fragment>)
      } else {
        return(
            <Spinner type="grow" color="info" />
        ); 
      }
        


    }
}





