import React from 'react';

import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Redirect, Link } from 'react-router-dom';
import  '../styles/signin.css';

//import axios dont forget


class SignIn extends React.Component {
    state = {
        //  username: '',
        email: '',
        //  shop: '',
        password: '',
        error: '',
        token: '',
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log('handle submit', response)
            })
            .catch(err => {
                const { message } = err;
                this.setState({ error: message });
            })
    }

    //  getFirebaseIdToken = () =>{
    //     firebase.auth().currentUser.getIdToken(/* forceRefresh */ false).then((idToken) => {
    //         this.setState({token})
    //         // Send token to your backend via HTTPS
    //         // ...
    //       }).catch((error)=> {
    //         // Handle error
    //       });
    //  }
    render() {
        const { email, password, error } = this.state;
        const displayError = error === '' ? '' : <div className='alert alert-danger' role='alert'>{error}</div>
        const displayForm =
            <React.Fragment>
                <>
                   <div className = 'container col-8'>
                    <div className='card'>
                        <h2 className='card-header text-center' style={{ backgroundColor: "orange" }}>
                            Sign in
                        </h2>
                        {displayError}
                        <div className='card-body'>
                            <form className='form-group' >
                               <label htmlFor='exampleInputEmail' className = 'fontSize mb-3'> Email Address</label>
                                <input type='email'  className='form-control' aria-describedby='emailHelp' placeholder='Enter email' name ='email' value={email} onChange ={this.handleChange} />
                                <small id = 'emailhelp' className = 'form-text-text-muted'>We'll never share your email to anyone else  </small>   
                            
                               <div className = 'form-group'>
                               <label htmlFor= 'exampleInputPassword 'className ='fontSize mt-3'>Password</label>
                               <input type="password" className="form-control" placeholder="Password" value={password} name="password" onChange={this.handleChange} />
                               </div>
                                <div className = 'text-center'>
                                <button className='btn btn-outline-warning mb-3 mt-4' type='submit' onClick = {this.handleSubmit}>Sign in</button>

                                <p>Not a member?
                                <Link to='/register'>Register</Link>
                                </p>

                                <p>or sign in with:</p>
                                <a href='https://facebook.com/' target='blank' type='button' className='btn-floating btn-fb btn-sm' >
                         <i className='fa fa-facebook'></i>
                     </a>
                     <a href='https://twitter.com/' target='blank'type='button' className='btn-floating btn-tw btn-sm'>
                         <i className='fa fa-twitter'></i>
                     </a>
                     <a href='https://linkedin.com/' target='blank' type='button' className='btn-floating btn-li btn-sm'>
                         <i className='fa fa-linkedin'></i>
                     </a>
                     <a href='https://github.com/' target='blank' type='button' className='btn-floating btn-git btn-sm'>
                         <i className='fa fa-github'></i>
                     </a>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </>
            </React.Fragment>

            
        return (
            <AuthContext.Consumer >
                {
                    user => {
                        if (user) {
                            return <Redirect to='/' />
                        }
                        else {
                            return displayForm;
                        }
                    }
                }
            </AuthContext.Consumer>

        );

    }

}

export default SignIn