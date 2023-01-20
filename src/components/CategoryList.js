import React from "react";
import { Link } from "react-router-dom";
import {FaLock, FaHome, FaThList, FaList, FaUsers } from "react-icons/fa";
import "../Styles/main.css";
import voting from './voting.png';
  
const CategoryList = () => {
  return (
    <nav>
        <div className="page">
        <header>
            <h3><img src={voting} height="40" width="40" style={{position: 'relative'}} alt="login"/></h3>
        
            <Link to="navbar"><button className="button"><FaHome/>  Overview</button></Link>
            <Link to="categorylist"><button className="button"><FaThList/>  Category List</button></Link>
            <Link to="votinglist"><button className="button"><FaList/>  Ballots</button></Link>
            <Link to="users"><button className="button"><FaUsers/>  Voters</button></Link>
          
            <button className="nav-btn">
                <FaLock/>
            </button>
        </header>
        </div>
        </nav>
  );
};
  
export default CategoryList;