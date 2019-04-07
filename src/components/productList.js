import React from 'react'; 
import { Media, Container, Row } from 'reactstrap';
import ProdListContext from '../contexts/prodList';
import BestSellerProd from './bestSellerProd';


const ProductList = (props)=> {
    console.log('products', props)
    // const product = props.product;
    // const name = product.prductName;
    // const desc = product.prductDesc;
    // const price = product.unitPrice;
    // const img = product.imgurl;


    return (
       <ProdListContext.Consumer>
           {value =>
                 value.map((product, index) => {
                    return <BestSellerProd key={index} product={product} addToCart={props.addToCart} index={index}></BestSellerProd>
                })
           }
       </ProdListContext.Consumer>
       
       
    )

}

export default ProductList;
