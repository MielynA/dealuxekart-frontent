import React from 'react'; 
import { Link } from 'react-router-dom';
import ProdListContext from '../contexts/prodList';
import '../styles/viewProduct.css'

export default function Product({product}) {
    return (
        <ProdListContext>
            {value => {
                const { addToCart, setSingleProduct } = value; 
                return (
                    <div className = "col-10 mx-auto col-sm-8 col-md-6  col-lg-4 my-3">
                    <div className="card">
                      <div className="img-container">
                        <img
                          src={product.image}
                          className="card-img-top p-5"
                          alt="product"
                          style={{ height: "320px" }}
                        />
                        <div className="product-icons">
                          <Link
                            to={`/product${product.id}`}
                            onClick={() => setSingleProduct(product.id)}
                          >
                            <div className="icon" />
                          </Link>
                          <div 
                            className="icon"
                            onClick={() => addToCart(product.id)}
                          />
                        </div>
                      </div>
                      <div className="card-body d-flex justify-content-between">
                        <p className="mb-0">{product.title}</p>
                        <p className="mb-0 text-main">${product.price}</p>
                      </div>
                    </div>
                 </div>
                )
            }}
        </ProdListContext>
    )
}
