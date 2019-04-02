import React from 'react'; 
import  * as firebase from 'firebase'; 
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
    saveImage = (url) =>{
        const date = Date();
        ImageService.saveImage(url, date);
      }
    
      handleFileInput = async (e) =>{
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
          const snapshot =  await newImage.put(firstFile);
          const url = await snapshot.ref.getDownloadURL();
          this.saveImage(url);
         }
          catch(err){
            console.log(err)
          }
      }
    
    
      render() {
    
        return (
          <div className='container'>
            <div className="input-group mb-3">
              <div className="custom-file">
                <input type="file" className="custom-file-input" multiple onChange={this.handleFileInput} />
                <label className="custom-file-label">Upload Image</label>
    
              </div>
            </div>
          </div>
        );
      }
    }
 