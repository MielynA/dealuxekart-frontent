import React from 'react';
import * as firebase from 'firebase';
import ImageService from '../services/images';
//import UploadDetail from './uploadDetail';
import axios from 'axios';

import { Card,CardBody,Row, Container, Form} from 'reactstrap';



export default class Home extends React.Component {
  state = {
    supplierId: 0,
    productName: '',
    productDesc: '',
    unitPrice: 0,
    color: '',
    quantityPerUnit: 0,
    categoryName: '',
    categoryDesc: '',
    url: '', 
    alertOn: false,
    message: '',

  }
  saveImage = (url) => {
    const date = Date();
    ImageService.saveImage(url, date);
  }

  handleFileInput = async (e) => {
    console.dir(e.target);
    const firstFile = e.target.files[0];

    const root = firebase.storage().ref() // direct access to the root of the bucket
    const newImage = root.child('/images/' + firstFile.name);

    //newImage.put(firstFile).then((snapshot)=>{
    //   console.log(snapshot)
    //    return  snapshot.ref.getDownloadURL()
    // })
    // .then((url)=>{
    //   console.log(url)
    //   this.saveImage(url);
    // })
    try {
      const snapshot = await newImage.put(firstFile);
      const url = await snapshot.ref.getDownloadURL(); //creates url from local in context of firebase
      this.saveImage(url);
      this.setState({ url: url })
    }
    catch (err) {
      console.log(err)
    }
  }  
  submitHandler = (e) => {
    // e.preventDefault();
    const { supplierId, productName, productDesc, unitPrice, color, quantityPerUnit, categoryName, categoryDesc, url } = this.state
    axios.post('http://localhost:5001/product', {
      supplierId: parseInt(supplierId),
      productName,
      productDesc,
      unitPrice: parseInt(unitPrice),
      color,
      quantityPerUnit: parseInt(quantityPerUnit),
      categoryName,
      categoryDesc,
      imgurl: url,
    })
      .then(response => response.data)
      .then(data => {
        console.log(data);
      })
     alert(`${this.state.productName}`  + 'has been created');
     
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const urlExist = this.state.url ? <img src={this.state.url} style={{borderRadius: '50%' ,width: '25%', height:'20%'}} alt=''></img> : 'No image yet';
    const { supplierId, productName, productDesc, unitPrice, color, quantityPerUnit, categoryName, categoryDesc } = this.state
    console.log('upload', this.state)
    return (
      <React.Fragment>
       <Container>
        <Form>
            <Card>
              <h2 className='card-header text-center' style={{ backgroundColor: "orange" }}>Upload Products</h2>
              <CardBody style={{align: 'center'}}>
               {urlExist}
               <hr></hr><br></br>
                <div className="custom-file col-8">
                  <input type="file" className="custom-file-input " multiple onChange={this.handleFileInput} accept='image/*' />
                  <label className="custom-file-label">Upload Image</label>
                </div>
            <Row>
              <div className='text-center col-8 '>
              <div className="input-group mt-2 mb-2">
                <input class="form-control" type="text" placeholder="Supplier Identification" name="supplierId" value={supplierId} onChange={this.handleChange}>
                </input>
              </div>
              <div className="input-group mt-2 mb-2">
                <input class="form-control" type="text" placeholder="Product Name" name="productName" value={productName} onChange={this.handleChange}>
                </input>
              </div>
              <div className="input-group  mb-2">
                <input class="form-control" type="text" placeholder="Optional Product Description" name="productDesc" value={productDesc} onChange={this.handleChange}>
                </input>
              </div>
              <div className="input-group mb-2">
                <input class="form-control" type="text" placeholder="Price" name="unitPrice" value={unitPrice} onChange={this.handleChange}>
                </input>
              </div>
              <div className="input-group  mb-2">
                <input class="form-control" type="text" placeholder="Optional Color" name="color" value={color} onChange={this.handleChange}>
                </input>
              </div>
              <div className="input-group mb-2">
                <input class="form-control" type="text" placeholder="In-Stocks" name="quantityPerUnit" value={quantityPerUnit} onChange={this.handleChange}>
                </input>
              </div>
              <div className="input-group mb-2">
                <input class="form-control" type="text" placeholder="Category Name ex: Hand Bags for Ladies" name="categoryName" value={categoryName} onChange={this.handleChange}>
                </input>
              </div>
              <div className="input-group mt-3 mb-3">
                <input class="form-control" type="text" placeholder="Category Description" name="categoryDesc" value={categoryDesc} onChange={this.handleChange}>
                </input>
              </div>
              <button className='btn btn-outline-warning mb-3 mt-4' type='submit' onClick={this.submitHandler}>Create</button>
            </div>
          </Row>
          </CardBody>
          </Card>
         </Form>
         </Container>
          {/* <UploadDetail></UploadDetail> */}
       
      </React.Fragment >
    );


  }
}

