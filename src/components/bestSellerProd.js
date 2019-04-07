import React from 'react'; 

import ProductDetails from '../components/productDetails';
import {Link} from 'react-router-dom'

import '../styles/bestseller.css';


const BestSellerProd = props => {
    console.log('bestseller props', props.product)

    
     
      return (<>
       
                       <img className='bestseller' src={props.product.imgUrl} alt=''></img>
                        <p>{props.product.prductName}</p>
                        <button>More</button>
                        <p></p>
                        <div>
                        <ProductDetails productInfo={props.product}></ProductDetails>  
                        </div>    
          </>
      )
  




}

export default BestSellerProd; 