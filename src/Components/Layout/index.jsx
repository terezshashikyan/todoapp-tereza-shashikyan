import {Link, Outlet} from 'react-router-dom';
import React from 'react';
import './styles.css';
import { signOut } from 'firebase/auth';
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";



function Layout() {

   const navigate = useNavigate();

    return(
 <>
     <div className="header">
        <div><Link to={"/"}><h2>Home</h2></Link> </div>
        <div><Link to={"/todos"}><h2>Todos</h2></Link> </div>
        <button onClick={() => {signOut(auth); navigate('./')}}>Log Out</button>
     </div>
     <div className="outlet">
     <Outlet/>
     </div>
     <div className="footer">
        All Rights Reserved
     </div>
 </>
 );
}


export default Layout;