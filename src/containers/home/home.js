import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProductInfo from '../../services/prodInfo';

import ProdListContext from '../../contexts/prodList';
import ProductList from '../../components/productList';

import { Link } from 'react-router-dom';

import '../../styles/homepage.css';
import ProductDetails from '../../components/productDetails';


class Home extends React.Component {
   constructor(props){
       super(props);
       this.state = {
          product: ProductInfo.product,
          list:[],
          addToCart: [],
          location: this.props.location.pathname,
          

       }
   }
    handleToggle = () =>{
      this.setState(prevState => ({
        modal: !prevState.modal
      }))
    }

    handleImageSelected = (e) =>{
        
      const selectImage = e.currentTarget
      console.log(selectImage)
    }  
    
    render() {
        
        
        return (
            <React.Fragment>
                <div id='myCarousel' className='carousel slide' data-ride='carousel'>
                    <ol className='carousel-indicators'>
                        <li data-target='#myCarousel' data-slide-to='0' className='active'></li>
                        <li data-target='#myCarousel' data-slide-to='1'></li>
                        <li data-target='#myCarousel' data-slide-to='2'></li>
                        <li data-target='#myCarousel' data-slide-to='3'></li>
                    </ol>

                    <div className='carousel-inner' role='listbox'>
                        <div className='item active'>
                            <img src={require('../../images/doublehandletote.jpg')} alt=''></img>
                            <div className='carousel-caption'>
                                <h3>Tote</h3>
                                <p>Appropriate for the office, but also for a fun day out with the girls.</p>
                            </div>
                        </div>

                        <div className='item'>
                            <img src={require('../../images/trapezoidtophandle.jpg')} alt=''></img>
                            <div className='carousel-caption'>
                                <h3>Handle tote bag</h3>
                                <p>Appropriate for the office, but also for a fun day out with the girls.</p>
                            </div>
                        </div>

                        <div className='item'>
                            <img src={require('../../images/lasercut.jpg')} alt=''></img>
                            <div className='carousel-caption'>
                                <h3>Laser cut Hand Bag</h3>
                                <p>Appropriate for the office, but also for a fun day out with the girls</p>
                            </div>
                        </div>
                        <div className='item'>
                            <img src={require('../../images/whipstitchtote.jpg')} alt=''></img>
                            <div className='carousel-caption'>
                                <h3>Whip Stitch tote bag</h3>
                                <p>Appropriate for the office, but also for a fun day out with the girls.</p>
                            </div>
                        </div>
                    </div>
            
                    <a className='left carousel-control' href='#myCarousel' role='button' data-slide='prev'>
                        <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
                        <span className='sr-only'>Previous</span>
                    </a>
                    <a className='right carousel-control' href='#myCarousel' role='button' data-slide='next'>
                        <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
                        <span className='sr-only'>Next</span>
                    </a>
                </div>
                    
                <div className='container text-center'>
                    <h2>Welcome to DealuxeKart</h2>
                    <h5>Best Seller</h5>
                
                    <ProdListContext.Provider value={this.state.product}>
                        <ProductList />
                      
                    </ProdListContext.Provider>
                
                    {/* <Modal isOpen={this.state.modal} toggle={this.handleToggle}>
                    <ModalBody>
                    <BestSellerProd product={this.state.product} onClick={this.handleImageSelected} ></BestSellerProd>
                    </ModalBody>
                    </Modal> */}
                 
                    <div className='row'>
                        <div className='col-12'>
                         <Link to='/products'></Link>
                        </div>
                    </div>
                        {/* <Modal isOpen={this.state.modal} toggle={this.handleToggle}>
                    <ModalBody>
                    <BestSellerProd product={this.state.product} onClick={this.handleImageSelected} ></BestSellerProd>
                    </ModalBody>
                    </Modal> */}
                 
                       {/* <BestSellerProd product={this.state.product} onClick={this.handleImageSelected}></BestSellerProd> */}
                       
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