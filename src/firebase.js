import app from 'firebase/app'; 
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCXtZH-E1zu_PV1yrm-IJoB3_bGSQ999fk",
    authDomain: "uploader-2e267.firebaseapp.com",
    databaseURL: "https://uploader-2e267.firebaseio.com",
    projectId: "uploader-2e267",
    storageBucket: "uploader-2e267.appspot.com",
    messagingSenderId: "988203435909"
};

app.initializeApp(config);

export default app;