import React from 'react';
import { Link } from 'react-router-dom';

const LogOut = () => {
    return (
        <div style={{margin:'5%',padding:'5%',textAlign:'center',color:'blue'}}>
           <span style={{fontWeight:'bold'}}>login here - </span> 
                <Link className="btn btn-success" to="/login">Log In</Link>
        </div>
    );
};

export default LogOut;