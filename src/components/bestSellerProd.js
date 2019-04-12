import React from 'react'; 
import { Card, CardImg, CardText, CardBody, Button, Container} from 'reactstrap'
import ProductDetails from '../components/productDetails';
import {Link} from 'react-router-dom'

import '../styles/bestseller.css';
import { useAlert } from 'react-alert';

const BestSellerProd = props => {
    
    console.log('bestseller props', props.product)
     const alert = useAlert();
    const product = props.product
    const index = props.index
    
     
      return (<>
                      
                     
                       <Card>
                        <CardBody>
                        <img className='bestseller' src={product.imgUrl} alt=''></img>
                        <CardText>{product.prductName}</CardText>
                        {/* <Button onClick={e => {props.addToCart(index)}}>add to cart</Button> */}
                        
                        <ProductDetails productInfo={props.product}></ProductDetails>  
                        </CardBody>
                        </Card>
            
                        
          </>
      )
  




}

export default BestSellerProd; 