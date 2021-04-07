import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
const Dashboard = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
        const {abc}=useParams();
        console.log(abc);
        const [data,setDataa] =useState([])
        
        useEffect(()=>{
            fetch('https://warm-shelf-30234.herokuapp.com/events')
            .then(res=>res.json())
            .then(data=>setDataa(data))    
        },[])
          const find= data.find(bk=>bk._id===abc)
          console.log(find?.price);
        const handleOrder=()=>{
            document.getElementById('success').style.display='block'
            document.getElementById('hideIt').style.display='none'
          const details ={
            userName :loggedInUser.name,
            userEmail : loggedInUser.email,
            BookName:find?.name,
            BookPrice:find?.price,
            orderDate:today
            }    

            fetch('https://warm-shelf-30234.herokuapp.com/orders',{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(details)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
        }
                    var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
            console.log(today);
        // var d = new Date();
        // var n = d.getMonth();
        // console.log(n);
        // const moonLanding = new Date();
        // console.log(moonLanding.getFullYear());
    return (
        <div>
            <div id="hideIt">
            <div style={{border:'1px solid red',margin:'7%',marginBottom:'0'}}>
                <h4 style={{marginBottom:'0'}}><img  style={{width:'450px',height:'250px'}} src={find?.imageURL} alt=""/> <span>Book Name : {find?.name} , </span> <span>Price : {find?.price}</span> <span ><button className="btn btn-dark"><h2 onClick={handleOrder}>Order</h2></button></span></h4>
            </div>
            
                <h2 style={{marginLeft:'7%',marginTop:'2%'}}>or <Link to="/home"><button className="btn btn-dark">Go home</button></Link></h2>
            </div>
            <div className="container text-secondary" id="success" style={{display:'none'}}>
                <h3>Hi, <span className="text-info">{loggedInUser.name}</span></h3>
                <hr/>
                <h4>Your selected Book - <span className="text-info">{find?.name}</span> </h4>
                <hr/>
                <h4>Price: <span className="text-info"> {find?.price}</span></h4>
                <hr/>
                <h4>Order Date : <span className="text-info">{today}</span> </h4>
                <hr/>
               <h3 className="text-secondary"> successfully Ordered, Thank you !</h3>
               <h6><Link className="btn btn-success" to="/home">see others book</Link></h6>
            </div>
            </div>
    );
};

export default Dashboard;