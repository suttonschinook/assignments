import React from 'react';
import Navbar from "./Navbar.js"
function Header() {
    return (
       <header>
           <Navbar />
           <h1 className = "blogTitle">Clean Blog</h1>
                <span className = "heading">A Blog Theme by Start Bootstrap</span>
       </header>
    )
}
export default Header