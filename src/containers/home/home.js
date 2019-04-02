import React from 'react';

import '../../styles/homepage.css';


class Home extends React.Component {








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
                                <h3>Whip Stitch tota bag</h3>
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


                {/* START OF BEST SELLER & CATEGORY CONTAINER */}
                <div className='container text-center'>
                    <h2>Welcome to DealuxeKart</h2>
                    <h5>Best Seller</h5>
                    <div className='row'>
                        <div className='col-12'>
                            <a href='#demo'>
                                <img className='bestseller ' src={require('../../images/blackhandbag.jpg')} alt=''></img></a>
                            <a href='#demo'>
                                <img className='bestseller' src={require('../../images/crossbody.jpg')} alt=''></img></a>
                            <a href='#demo'>
                                <img className='bestseller' src={require('../../images/shoulderbag.jpg')} alt=''></img></a>
                            <a href='#demo'>
                                <img className='bestseller' src={require('../../images/fringebucket.jpg')} alt=''></img></a>
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