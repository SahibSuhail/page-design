import React from 'react'
import './PageLeft.css';

export default function PageLeft() {
  return (
    
     <div className="container emp-profile firstRow">
         <form method="">
           {/* row first */}
           <div className="row">
             <div className="col-md-4">
               {/* <img src="https://th.bing.com/th/id/OIP.OsEBut8EC04NFWMiiuELbQHaJV?pid=ImgDet&rs=1"  width="200px" heigth="200px" alt="lodding"/> */}
               <img src="rose.jpg" width="200px" heigth="200px" alt="lodding"/>
             </div>

             <div className="col-md-6">
                <div className="profile-head ">
                    <h2>Jeremy Rose</h2>
                    <a href='#'>Product Designer</a>
                    <p className="profile-rating mt-3 weigthlow"  >RANKINGS</p>

                    <div className="btn mt-5 " role="tablist">
                    
                       <button type="button" className="btn btn-lg ">Send message</button>
                       <button type="button" className="btn  btn-lg ">Contacts</button>
                       <button type="button" className="btn  btn-sm">Report user</button>
                    </div>
                    <ul className="nav nav-tabs mt-5" role="tablist">
                       <li className="nav-item">
                       <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                       </li>
                       <li className="nav-item">
                         <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"><i class="fa-solid fa-user"></i> About</a>
                       </li>

                    </ul>

                </div>
             </div>
                
              <div className="col-md-2">
                <p className="weigthlow"><i class="fa-duotone fa-bookmark"></i> Bookmark</p>
              </div>
           </div>
        </form>
           </div>
  )
}