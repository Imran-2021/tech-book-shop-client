import React, { useContext } from 'react';
import { Link, } from 'react-router-dom';
import { UserContext } from '../App';
const Header = () => {
  const [loggedInUserr,setLoggedInUserr]=useContext(UserContext);
    return (
        <div style={{userSelect:'none'}}>
            <ul class="nav justify-content-center ">
            <li class="nav-item">
    <Link style={{marginRight:'300px',userSelect:'none'}} class="nav-link disabled text-primary" to="/"><h3>Tech-BookShop</h3> </Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/"><h4>Home</h4> </Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/admin"> <h4>Admin</h4></Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/orders"> <h4>Orders</h4></Link>
  </li>

  {
    loggedInUserr.name? <li class="nav-item">
    <Link class="nav-link" onClick={()=>setLoggedInUserr({})} to="/logout"> <h4>Log-Out</h4></Link>
  </li> :<li class="nav-item">
    <Link class="nav-link" to="/login"> <h4>Log-In</h4></Link>
  </li>
  }
  
</ul>
        </div>
    );
};

export default Header;