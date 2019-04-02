import React, { Component } from 'react';
import { BrowserRouter , Route, Switch} from 'react-router-dom'; 

//--- PAGES
//import CoverPage from './components/coverpage/coverPage';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './containers/home/home';

import SignIn from './containers/signin';
import Register from './containers/register';
import Logout from './containers/logout';
import Error404 from './components/error404page';
import firebase from './firebase';

//--- CONTEXT 
import AuthContext from './contexts/auth';  

class App extends Component {
  state = {
    user: null, 
  }

  componentDidMount = () => {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user =>{
      if(user){
        this.setState({user});
      }
      else {
        this.setState({user: null})
      }
    })
  }

  componentWillUnmount = () =>{
    this.unsubscribe();
  }
  render() {
    return (
      <React.Fragment>
      <BrowserRouter>
       <AuthContext.Provider value={this.state.user}>
       {/* <CoverPage exact path ='/Welcome' component={CoverPage}/> */}
       <Route path='/' component={Navbar} />
     
       <div className = 'container'>
       <Route path='/' exact component={Home} />
   
       <Route path='/signin' exact component={ SignIn } />
       <Route path='/register' component={ Register } />
       <Route path='/logout' exact component= { Logout} />
       {/* <Route component={ Error404 } /> */}
       </div>
      

       
       <Route path='/' component={Footer} />
      
       
       </AuthContext.Provider>
       </BrowserRouter>
      
      </React.Fragment>
    );
  }
}

export default App;
