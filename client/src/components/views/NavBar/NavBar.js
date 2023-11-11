import React from 'react'
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav>
            {/* <Link to="/about"><span>ABOUT</span></Link>
            <Link to="/skills"> <span>SKILLS</span></Link>
            <Link to="/works"> <span>WORKS</span></Link> */}
            <a href="https://blog.naver.com/sknglee22" target="_blank"><span>BLOG</span></a>
            <a href="https://github.com/sang-gyeong" target="_blank"> <span>GITHUB</span></a>
        </nav>
    )
}

export default Navbar