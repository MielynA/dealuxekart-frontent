import React from 'react'; 
import { Modal, ModalHeader, Button, ModalBody, ModalFooter} from 'reactstrap';
import ViewDetails from './viewDetails';


export default class ProductDetail extends React.Component {
     constructor(props){
       super(props);
       this.state = {
           view: [],
           modal: false, 
       }

     }

    handleToggle = () => {
         this.setState(prevState =>({
            modal: !prevState.modal
         }))
    }

//   componentDidUpdate = () => {
//     Storage.getRecentlyViewed('view')
//     .then((localData) => {
//       let hasAdded = false
//       if (localData !== null) {
//         for (let i = 0; i < localData.length; i++) {
//           if (localData[i].id === this.props.productInfo.id) {
//             hasAdded = true
//             return localData
//           }
//         }
//       }
//       if (hasAdded === false && localData !== null) {
//         const updatedViewed = localData
//         updatedViewed.push(this.props.productInfo)
//         return updatedViewed
//       }
//       if (localData === null) {
//         const newViewed = []
//         newViewed.push(this.props.productInfo)
//         return newViewed
//       }
//     })
//     .then((viewed) => {
//       Storage.saveData('view', viewed)
//     })
    



render(){
  
        return(
            <React.Fragment>
             <Button OnClick={this.handleToggle}>test</Button>
             <Modal isOpen={this.state.modal} toggle={this.handleToggle}>
             <ModalHeader toggle={this.handleToggle}>{this.props.productInfo.prductName}</ModalHeader>
             <ModalBody>
            <ViewDetails product={this.props.productInfo} onClick={this.state.view}></ViewDetails>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.handleToggle}>Close</Button>
          </ModalFooter>
        </Modal>
            </React.Fragment>
        );

    }
}





