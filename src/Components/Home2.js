import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home2.css'
const Home2 = (props) => {

    const {price,name,imageURL,_id}=props.data
    console.log(_id);
    return (
        <div>
            <div>
            </div>
            <div className="display-design">
                <img src={imageURL} alt=""/>
                <h4>Price: {price}</h4>
                <h4>Book: {name}</h4> 
                {/* <h5>{_id}</h5> */}
                <button className='btn bg-light'><h4><Link to={`/dashboard/${_id}`}> Buy Now</Link></h4></button>
            </div>
        </div>
    );
};

export default Home2;