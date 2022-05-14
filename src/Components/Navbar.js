import React from 'react'
import './Navbar.css';
export default function Navbar() {
  return (
    <>
   <nav>
        <ul>
            <li>
               <p className="navcode"> Kodecolor</p>
            </li>
            <li>
                <input  className="search" type="search" placeholder="search"/>
            </li>
            <li>
                
            <a href="#">Find People</a>
            </li>
            <li>
                <a href="#">Messages</a> 
           </li>
            <li>
            <i class="fa-solid fa-user"></i>  <a href="#">My Contacts</a>
            </li>
        </ul>
    </nav>
    </>
  )
}
