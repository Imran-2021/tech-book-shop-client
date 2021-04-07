import React, {useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import { UserContext } from '../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);

    const history = useHistory();
   const location = useLocation();
   const { from } = location.state || { from: { pathname: "/" } };

if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }else {
        firebase.app();
     }


    const [user,setUser]=useState({
        isSignIn:false,
        name: '',
        email:'',
        photoURL:'',
    })
    
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn=()=>{
        firebase.auth().signInWithPopup(provider).then((result) => {
    const{displayName,email,photoURL}= result.user;
    const singinUser ={
        isSignIn:true,
        name:displayName,
        email:email,
        photoURL:photoURL,
    }        
    setUser(singinUser)
    setLoggedInUser(singinUser)
    history.replace(from);
    console.log(displayName,email,photoURL);
    })
    .catch((error) => {
    var errorMessage = error.message;
    console.log(errorMessage);
    });}
    return (
        <div style={{textAlign:'center',margin:'3%'}}>
           {
               user.isSignIn ?  <h4>Log in successfully</h4> :<button onClick={handleSignIn}  className="btn btn-primary">Log In with Google</button>
           }
            
        </div>
    );
};

export default Login;