import React from 'react';

import CarouselHome from '../../components/carousel';  
import ProductInfo from '../../services/prodInfo';
import ProdListContext from '../../contexts/prodList';
import ProductList from '../../components/productList';
import { Link } from 'react-router-dom';

// import '../../styles/homepage.css';
import Storage from '../../services/cart';



class Home extends React.Component {
   constructor(props){
       super(props);
       this.state = {
          product: ProductInfo.product,
          list:[],
          addedCartItems: [],
          cartOpen: false,
          location: this.props.location.pathname,
       }
   }
    

    handleImageSelected = (e) =>{
      const selectImage = e.currentTarget
      console.log(selectImage)
    }  
    
    saveStateToData = () => {
        Storage.saveCart('addToCart', (this.state.addedCartItems))
        .then(result => {
            console.log('addToCart', result)
        })
    }
    addToCart = (index) => {
        Storage.getData()
            .then(localdata => {
                if (localdata !== null) {
                    const product = this.state.product;
                    const productSelected = [product[index]];
                    const addedCartItems = localdata;
                    const newCartItems = addedCartItems.concat(productSelected);
                    this.setState({
                        addedCartItems: newCartItems
                    });
                    return newCartItems
                } else {
                    const product = this.state.product;
                    const productSelected = [product[index]];
                    const addedCartItems = [];
                    const newCartItems = addedCartItems.concat(productSelected);
                    this.setState({
                        addedCartItems: newCartItems
                    });
                    return newCartItems
                }
            })
            .then(newCartItems => {
                Storage.saveData('addedCartItems', (newCartItems))
                    .then(() => {
                        this.setState({ addedCartItems: newCartItems })
                    })
            })
        }
    render() {
        
        
        return (
            <React.Fragment>
                <CarouselHome></CarouselHome>
                <div className='container text-center'>
                    <h2>Welcome to DealuxeKart</h2>
                    <h5>Best Seller</h5>
                    <ProdListContext.Provider value={this.state.product}>
                        <ProductList addToCart={this.addToCart}/>
                    </ProdListContext.Provider>
                    <div className='row'>
                        <div className='col-12'>
                         <Link to='/products'></Link>
                        </div>
                    </div>
                    <h5>Category</h5>
                    <div className='row'>
                        <div className='col-12'>
                            <a href='#demo'>
                                <img className='category ' src={require('../../images/humpackedtophandle(black).jpg')} alt=''></img>Hand Bags</a>
                            <a href='#demo'>
                                <img className='category' src={require('../../images/gardenminicardholder(white).jpg')} alt=''></img>Wallets</a>
                            <a href='#demo'>
                                <img className='category' src={require('../../images/embellishshoulder(blue).jpg')} alt=''></img>Shoulder Bags</a>
                            <a href='#demo'>
                                <img className='category' src={require('../../images/twotonelaptop(yellow).jpg')} alt=''></img>Laptop Bag</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home; 