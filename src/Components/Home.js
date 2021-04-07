import React, {useEffect, useState } from 'react';
import Home2 from './Home2';
import Button from '@material-ui/core/Button';
const Home = () => {
    // const [data,setData] =useState([])
    // useEffect(()=>{
    //     setData(Data)
    //   },[])
    const [events,setEvents]=useState([])
    console.log(events);
    useEffect(()=>{
        fetch('https://warm-shelf-30234.herokuapp.com/events')
        .then(res=>res.json())
        .then(data=>setEvents(data))
        
    },[])
    return (
        <div className='container gridd'>
            {
                events.length===0 && <div style={{textAlign:'right',margin:"50%"}}>
              <div class="spinner-border" style={{width: "4rem", height: "4rem"}} role="status">
            <span class="sr-only">Loading...</span>
            </div>
            <br/>
            <br/>
            <br/>
            <h4>Loading......</h4>
              </div>
            }
            {
          events.map(data=><Home2 data={data} ></Home2>)
        }
        
        </div>
    );
};

export default Home;