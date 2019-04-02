import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/coverpage/coverPage.css'

const CoverPage = () => {
    return (
        <React.Fragment>
           
            <div className="loader">
                <div className="dot">
                    <p>D</p>
                </div>
                <div className="dot">
                    <p> E</p>
                </div>
                <div className="dot">
                    <p>A</p>
                </div>
                <div className="dot">
                    <p>L</p>
                </div>
                <div className="dot">
                    <p>U</p>
                </div>
                <div className="dot">
                    <p>X</p>
                </div>
                <div className="dot">
                    <p> E</p>
                </div>
                <div className="dot">
                    <p>K</p>
                </div>
                <div className="dot">
                    <p>A</p>
                </div>
                <div className="dot">
                    <p>R</p>
                </div>
                <div className="dot">
                    <p>T</p>
                </div>
                <div>
                    <img src={require('../../images/dealuxeKart.png')} alt =''/>
                    <Link className="btn" to='/'>Shop with no sweat </Link>
                </div>
                <div></div>
            </div>
        </React.Fragment>
    );
}




export default CoverPage;
