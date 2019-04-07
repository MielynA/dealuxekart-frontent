import React from 'react'; 
import axios from 'axios';
import { Container, Row , Col, Card, CardImg , CardText , CardBody, CardTitle, CardDeck, Button } from 'reactstrap';


export default class ViewAll extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productsAll: [],
        }
    }  

    componentDidMount() {
        axios.get('http://localhost:5001/product/').then((data)=>{
            this.setState({productsAll: data.data.data})
            console.log(this.state)
        }).catch((error)=> {
            // console.log(error);
        })
    }

    // newUser = () => {
    //     const {email, customerId } =this.state;
    //     axios.post('http://localhost:5001/privatecustomer', {
    //       username: "Amaya",
    //       password: "admin123",
    //       email: "amaya@email.com",
    //       billingAdd: "Kew Gardens", 
    //       city: "NY",
    //       state:"NYC ",
    //       creditCard: 1234444,

    //     })
    //  }


    render(){
        return(
            <React.Fragment>
             
                  
                  
                  
                  
                {
                    this.state.productsAll.map((products, i)=>{
                            return (
                                <React.Fragment>   
                            <Row>
                            <div className='col-4'>
                            <div style={{marginRight:'50px', marginTop:'15px', marginLeft:'10px'}} >
                            <Card>
                            <CardImg src={products.imgurl.pic} alt =''/>
                            <CardBody >
                            <CardTitle>{products.productname}</CardTitle>
                            <CardText>{products.categorydesc}</CardText>
                            <CardText style={{color:"red"}}> $ {products.unitprice}</CardText>                 
                            <Button>Add to Cart</Button>    
                            </CardBody>
                            </Card>
                            </div>
                            </div>
                            </Row>   
                             </React.Fragment>
                                )
                        
                    })
                }
                    
                  
            </React.Fragment>
        ); 
    }



}