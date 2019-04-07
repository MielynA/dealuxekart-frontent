import React from 'react';
import * as firebase from 'firebase';
import ImageService from '../services/images';



// Initialize Firebase
// const config = {
//     apiKey: "AIzaSyCXtZH-E1zu_PV1yrm-IJoB3_bGSQ999fk",
//     authDomain: "uploader-2e267.firebaseapp.com",
//     databaseURL: "https://uploader-2e267.firebaseio.com",
//     projectId: "uploader-2e267",
//     storageBucket: "uploader-2e267.appspot.com",
//     messagingSenderId: "988203435909"
//   };
//   firebase.initializeApp(config);


export default class Products extends React.Component {
  state = {
    productName: '',
    price: null,
    description: '',
    category: '',
    url: ''
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
      this.setState({url: url})
    }
    catch (err) {
      console.log(err)
    }
  }

  /*
  clickButton() when button is clicked, make axios call (post) takes the state and sends to back end
  */

  render() {

    return (

      <React.Fragment>

        <div className='container col-8'>
          <div className='card'>
            <h2 className='card-header text-center' style={{ backgroundColor: "orange" }}>Upload Products</h2>
            <div className='card-body'>

              <div className="custom-file">
                <input type="file" className="custom-file-input" multiple onChange={this.handleFileInput} />
                <label className="custom-file-label">Upload Image</label>
              </div>
            </div>
         

        <div className='row'>
          <div className='text-center col-8'>
            <div className="input-group mt-3 mb-3">
              <input class="form-control" type="text" placeholder="Product Name">
              </input>
            </div>
            <div className="input-group mt-3 mb-3">
              <input class="form-control" type="text" placeholder="Price">
              </input>
            </div>
            <div className="input-group mt-3 mb-3">
              <input class="form-control" type="text" placeholder="Description">
              </input>
            </div>
            <div className="input-group mt-3 mb-3">
              <input class="form-control" type="text" placeholder="Category">
              </input>
            </div>
            <button className='btn btn-outline-warning mb-3 mt-4' type='submit' onClick = {this.handleSubmit}>Create</button>
          </div>
        </div>
        </div>
        </div>
           
              </React.Fragment >
        );
  }
}
