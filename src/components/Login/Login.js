import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import './Login.css';
import google from '../../travelGuru/Icon/google.png';
import fb from '../../travelGuru/Icon/fb.png';

firebase.initializeApp(firebaseConfig);

function Login() {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
      isSignIn: false,
      name: '',
      email: '',
      photo: '',
      password: ''
    });

    const [place, setPlaces] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
  
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
      firebase.auth().signInWithPopup(provider)
      .then(res => {
        const {displayName, email, photoURL} = res.user;
        const signedInUser = {
          isSignIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        };
        setUser(signedInUser);
        setPlaces(signedInUser);
        history.replace(from);
      })
      .catch(error => {
        console.log(error);
        console.log(error.message);
      })
    }
  
    const handleSignOut = () => {
      console.log('clicked')
      firebase.auth().signOut()
      .then(res => {
        const SignedOutUser = {
          isSignIn: false,
          name: '',
          email: '',
          photo: '',
          error: '',
          success: false,
        }
        setUser(SignedOutUser);
      })
    }
  
  
    const handlefbSignIn = () => {
      const fbProvider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(fbProvider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        setUser(user);
        setPlaces(user)
        history.replace(from);
      }).catch(function(error) {
        var errorMessage = error.message;
      });
    }
  
    const handleBlur = (e) => {
      let isFieldValid = true;
      if(e.target.name === 'email'){
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      }
      if(e.target.name === 'password'){
        const isPasswordValid = e.target.value.length >= 6;
        const passwordHasNumber = /\d{1}/.test(e.target.value);
        isFieldValid = isPasswordValid && passwordHasNumber;
      }
  
      if(isFieldValid){
        const newUserInfo = {...user};
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
      }
      
    }
  
    const handleSubmit = (e) => {
      if(newUser && user.email && user.password){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = {...user};
          newUserInfo.error = '';
          newUserInfo.success = true;
          undateUserName(user.name);
          setUser(newUserInfo);
        })
        .catch( error => {
          var errorMessage = error.message;
          const newUserInfo = {...user};
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
        
      }
      if(!newUser && user.email  && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = {...user};
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          setPlaces(newUserInfo);
          history.replace(from);
          console.log('sign in user', res.user)
        })
        .catch(function(error) {
          var errorMessage = error.message;
          const newUserInfo = {...user};
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
      }
      e.preventDefault();
    }
  
    const undateUserName = name => {
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: name
      })
      .then( res => {
        console.log('user name update Successfully');
      })
      .catch( error => {
        console.log(error)
      });
    }
  
  
    return (
      <div className="row justify-content-center">
          <div className="from-area">
        {
          user.isSignIn && <div>
            <p>Welcome, {user.name}</p>
            <p>Your Email: {user.email}</p>
            <img src={user.photo} alt=""/>
            </div>
        }
        
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div class="form-group text-dark">
                { newUser && <input class="form-control" onBlur={handleBlur} type="text" name="name" placeholder="First name"/>
                // <input type="text"/>
                }
                <br/>
                <input class="form-control" onBlur={handleBlur} type="email" name="email" placeholder="Your Email Address" required/> <br/>
                <input class="form-control" onBlur={handleBlur} type="password" name="password" placeholder="Your Password" required/> <br/>
                <input class="form-control bg-warning" type="submit" value={newUser ? "Sign up" : 'Sign in' }/>
            </div>
        </form>
        <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUSer" id=""/>
        <label htmlFor="newUSer">New User Sign up</label> <br/>
        <p style={{color: 'red'}}>{user.error}</p>
        {user.success &&  <p style={{color: 'green'}}>User {newUser ? 'Created' : 'Logged in'} Successfully</p>}

        { user.isSignIn ? <button onClick={handleSignOut}>Sign Out</button> :
          <button class="signinbtn" onClick={handleSignIn}> <img src={google} alt="" /> Sign in</button>
        }
        <br/>
        <button class="signinbtn" onClick={handlefbSignIn}> <img src={fb} alt=""/> Fb sign in</button>
        </div>
      </div>
    );
}

export default Login;
