import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import Order from './Order';

const Orders = () => {
    const [orders,setOrders]=useState([])
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    
    useEffect(()=>{
        fetch('https://warm-shelf-30234.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>{
            setOrders(data)
            console.log(data)
        
        })
        
    },[])
    console.log(orders);
    return (
        <div className="container ">
            <h3>Hi,{loggedInUser.name}</h3>
            <p>Your orders details given bellow...</p>
            <ol>
            <table className="container" style={{border:'1px solid red',padding:'50px'}}>
                <tr>
                    <th colSpan='3'className='text-secondary' style={{textAlign:'center'}}><h4>Totall Numbers of Books -<span className='text-primary'>{orders.length}</span> </h4></th>
                </tr>
                <tr style={{border:'1px solid red',padding:'50px'}}>
                    <th>Tech-Book</th>
                    <th>Price</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td> {orders.map(data=><Order data={data.BookName}/>)}</td>
                    <td> {orders.map(data=><Order dataa={data.BookPrice}/>)}</td>
                    <td> {orders.map(data=><Order dataaa={data.orderDate}/>)}</td>
                </tr>
                
            </table>
             </ol>
            <h4>order from - <Link to="/home">Home</Link> </h4>
        </div>
    );
};

export default Orders;