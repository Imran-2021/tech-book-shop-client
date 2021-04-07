import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './Admin.css'

const Admin = () => {
    const [imageURL,setImageURL]=useState(null)


    const onSubmit = data => {
        alert('successfully submit')
        const eventData = {
            price : data.price,
            name: data.name,
            imageURL:imageURL
        }
        const url =`https://warm-shelf-30234.herokuapp.com/addEvent`
        console.log(eventData)

        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res=>console.log('serverside response', res))
    };
    const handleImgUpload=(event)=>{
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key','01e2a8c107181a07ae8488abba8f5e5e');
        imageData.append('image',event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
            console.log(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
       
    }
    const { register, handleSubmit } = useForm();


    const [manageProducts,setManageProducts]=useState([])
    useEffect(()=>{
            fetch('https://warm-shelf-30234.herokuapp.com/events')
            .then(res=>res.json())
            .then(data=>setManageProducts(data))
            
        },[])
    const manageData=()=>{
        console.log('mangage Data');
        document.getElementById('manage').style.display='block'
        document.getElementById('submit').style.display='none'
        

    }
   
    const manageProduct =()=>{
        document.getElementById('submit').style.display='block'
        document.getElementById('manage').style.display='none'
    }


    return (
        <div className='container'>
            <div className=" half test" style={{width:'400px',height:'200px',backgroundColor:'orange'}}>
                <br/>
                <br/>
                <button className="btn btn-success ml-5 " onClick={manageProduct}>Add Product</button>
                <br/>
                <br/>
                <button className="btn btn-success ml-5 " onClick={manageData}>MangageData</button>
                <br/>
                <br/>
            </div>
            <div className='half half2'>

            <div id="submit" style={{textAlign:"center"}}>
                <h3>Add New Products....</h3>
                <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input style={{width:'400px',padding:'10px'}} name="name" defaultValue="Book name" ref={register} /> <br/> 
                <input style={{width:'400px',padding:'10px',marginTop:'2px'}} name="price" defaultValue="price" ref={register} /> <br/>
                <input style={{margin:'30px'}} name="exampleRequired" type="file" onChange={handleImgUpload} /> <br/>
                <input className="btn btn-success" type="submit" />
                </form> 
                </div>
                
            </div>
        
            <div id='manage' style={{display:'none',textAlign:'center'}}>
                        <h4 className='text-secondary'>Manage Data</h4>

                        {
                            manageProducts.map(data=><p style={{textAlign:'left'}}> <span className='text-primary'>Book Name:</span> {data.name} <span className='text-primary' >Price:</span> {data.price} 
                            
                            <span className="hover" style={{padding:'5px',backgroundColor:'#ddd',borderRadius:'5px',cursor:'pointer',float:'right'}}>Delete</span> 
                            
                            <span className="hover" style={{padding:'5px',backgroundColor:'#ddd',borderRadius:'5px',cursor:'pointer',float:'right'}}>Update</span></p>)
                            } 
            </div>
        </div>
        </div>
    );
};

export default Admin;